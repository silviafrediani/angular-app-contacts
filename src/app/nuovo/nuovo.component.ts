import { Component, OnInit } from '@angular/core';
import { Contatto } from '../interfaces/contatto';
import { ContattiService } from '../contatti.service';
// form
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuovo',
  templateUrl: './nuovo.component.html',
  styleUrls: ['./nuovo.component.css']
})

export class NuovoComponent implements OnInit {

  creazioneOk: boolean = false;
  contatto: Contatto;
  // il nome della variabile formNuovo presente nel template è di tipo FormGroup
  formNuovo: FormGroup;

  constructor(private contattiservice: ContattiService) { }

  ngOnInit() {

    this.formNuovo = new FormGroup({
      nome: new FormControl('',[Validators.required]),
      cognome: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      foto: new FormControl(),
    });
  }
  onSubmit() {
    this.contattiservice.addContatto(this.formNuovo.value).subscribe(
      (res) => {
        console.log(res);
        this.creazioneOk = true;
      },
      (err) => console.log(err)
    );
    console.log(this.formNuovo.value);

    // stop here if form is invalid
    if (this.formNuovo.invalid) {
      return;
    }
  }
}
