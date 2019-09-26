// questo componente è pensato per ricevere l'id del contatto come parametro dell'url
// e visualizzarlo nella rotta /lista/[id]
import { Component, OnInit, ViewChild } from '@angular/core';
import { Contatto } from '../interfaces/contatto';
import { ContattiService } from '../contatti.service';
// form
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// importo questi 2 moduli per recuperare parametri da url
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})

export class ModificaComponent implements OnInit {

  // "guardo dentro" al DOM della vista e stabilisco come variabile (proprietà) della classe del componente il riferimento che nel template ho marchiato con #formModificaRef
  // d'ora in poi ci posso accedere come this.formModificaRef.nativeElement
  //@ViewChild("formModificaRef") formModificaRef;

  aggiornamentoOk: boolean = false;

  idContatto: string;

  contatto: Contatto;

  // il nome della variabile formModifica presente nel template è di tipo FormGroup
  formModifica: FormGroup;

  constructor(private route: ActivatedRoute, private contattiservice: ContattiService, private fb: FormBuilder) { }

  ngOnInit() {

    //console.log(this.formModificaRef.nativeElement);

    this.idContatto = this.route.snapshot.paramMap.get('id');
    // passo alla funzione getContatto il parametro recuperato dall'url
    this.getContatto(this.idContatto);

    this.formModifica = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('',[Validators.required]),
      cognome: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      foto: new FormControl(),
    });
  }

  getContatto(idct:string) {
    this.contattiservice.getContatto(idct).subscribe( risp => this.contatto = risp[0] );
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formModifica.get('foto').setValue(file);
    }
  }

  onSubmit() {

    this.contattiservice.updateContatto(this.formModifica.value).subscribe(
      (res) => { console.log(res); this.aggiornamentoOk = true; },
      (err) => console.log(err)
    );

    // this.submitted = true;
    console.log(this.formModifica.value);

    // stop here if form is invalid
    if (this.formModifica.invalid) {
      return;
    }
  }

}
