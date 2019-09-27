import {Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contatto } from '../interfaces/contatto';
import { ContattiService } from '../contatti.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})

export class DettaglioComponent implements OnInit {
  // marchio la proprietà datiIn, come d'entrata dal componente padre lista
  @Input() datiIn: Contatto;
  // marchio la proprietà deleted come di uscita per aggiornare la vista alla cancellazione di un contatto
  @Output() deleted = new EventEmitter();

  @Input() mostraSezioneModifica = false;

  constructor(private contattiservice: ContattiService) { }

  ngOnInit() {
  }
  modificaContatto1() {
    // this.appmodifica2.nativeElement.style.display = 'block';
    // this.appdettaglio.nativeElement.style.display = 'none';
    this.mostraSezioneModifica = true;
  }
  eliminaContatto(id:string) {
    console.log(id);
    if(confirm("Eliminare definitivamente il contatto "+this.datiIn.nome+" "+this.datiIn.cognome+ "?")) {
      this.contattiservice.deleteContatto(id).subscribe(
        (res) => {
          console.log(res);
          // this.aggiornamentoOk = true;
          this.deleted.emit(this.datiIn);
        },
        (err) => console.log(err)
      );
    }
  }
}
