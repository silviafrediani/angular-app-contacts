import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
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

  canceled = false;
  contatto: Contatto;
  // il nome della variabile formModifica presente nel template è di tipo FormGroup
  formModifica: FormGroup;

  constructor(private contattiservice: ContattiService, private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.formModifica = new FormGroup({
      id: new FormControl(this.contattoIn.id),
      nome: new FormControl(this.contattoIn.nome,[Validators.required]),
      cognome: new FormControl(this.contattoIn.cognome,[Validators.required]),
      telefono: new FormControl(this.contattoIn.telefono,[Validators.required]),
      email: new FormControl(this.contattoIn.email,[Validators.required,Validators.email]),
      file: new FormControl(null),
    });
  }
  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formModifica.patchValue({
          file: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
  onSubmit() {
    console.log(this.formModifica.value);
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
  nascondiSezioneModifica() {
    this.canceled = true;
  }
}
