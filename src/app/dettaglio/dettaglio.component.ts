import {Component, ViewChild, Input, Output, EventEmitter, OnInit, AfterViewInit} from '@angular/core';
import { Contatto } from '../interfaces/contatto';
import { ContattiService } from '../contatti.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})

export class DettaglioComponent implements OnInit, AfterViewInit {
  // marchio la proprietà datiIn, come d'entrata dal componente padre lista
  @Input() datiIn: Contatto;
  // marchio la proprietà deleted come di uscita per aggiornare la vista alla cancellazione di un contatto
  @Output() deleted = new EventEmitter();

  // "guardo dentro" al DOM della vista e stabilisco come variabili (proprietà) della classe del componente i riferimenti che nel template ho marchiato con #
  // d'ora in poi ci posso accedere come this.nomeElemento.nativeElement
  @ViewChild("appdettaglio", {static: false}) appdettaglio;
  @ViewChild("appmodifica2", {static: false}) appmodifica2;

  constructor(private contattiservice: ContattiService,public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.appmodifica2.nativeElement.style.display = 'none';
  }
  modificaContatto1() {
    this.appmodifica2.nativeElement.style.display = 'block';
    this.appdettaglio.nativeElement.style.display = 'none';
  }
  // metodo che viene richiamato quando questo componente che è in ascolto,
  // riceve l'evento updated che viene scatenato dal figlio Modifica2
  modificaContatto2(event) {
    console.log(event);
    this.appmodifica2.nativeElement.style.display = 'none';
    this.appdettaglio.nativeElement.style.display = 'block';
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
  eliminaContatto(id:string) {
    console.log(id);

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
