import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contatto } from '../interfaces/contatto';
import { ContattiService } from '../contatti.service';
// form
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifica2',
  templateUrl: './modifica2.component.html',
  styleUrls: ['./modifica2.component.css']
})

export class Modifica2Component implements OnInit {

  @Input() contattoIn: Contatto;
  // la proprietà updated contiene i valori del form in uscita
  @Output() updated = new EventEmitter();

  contatto: Contatto;
  // il nome della variabile formModifica presente nel template è di tipo FormGroup
  formModifica: FormGroup;

  constructor(private contattiservice: ContattiService) { }

  ngOnInit() {

    this.formModifica = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('',[Validators.required]),
      cognome: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      foto: new FormControl(),
    });
  }
  onSubmit() {
    this.contattiservice.updateContatto(this.formModifica.value).subscribe(
      (res) => {
        console.log(res);
        // this.aggiornamentoOk = true;
        // se l'aggiornamento del contatto avviene con successo mando in uscita (emetto) un evento con @Output ed EventEmitter
        // che verrà ascoltato dal padre DettaglioComponent
        this.updated.emit(this.formModifica.value);
        },
      (err) => console.log(err)
    );
    console.log(this.formModifica.value);

    // stop here if form is invalid
    if (this.formModifica.invalid) {
      return;
    }
  }
}
