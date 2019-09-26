import {Component, Input, OnInit} from '@angular/core';
import { Contatto } from '../interfaces/contatto';
import { ContattiService } from '../contatti.service';
// importo servizio Router per fare il navigate
import { Router } from '@angular/router';
// importo modulo configurazione ng-boostrap accordion
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listacontatti: Contatto[] = [];

  constructor(private contattiservice: ContattiService,private router: Router,private config: NgbAccordionConfig) {
    // customize default values of ng-boostrap accordion
    this.config.closeOthers = true;
  }
  ngOnInit() {
    // subscribe è un metodo necessario per gestire dati che arrivano da un Observable
    this.contattiservice.getListaContatti().subscribe( risp => this.listacontatti = risp );
  }
  nuovoContatto() {
    this.router.navigate(['/nuovo/']);
  }
  // metodo richiamato in seguito all'ascolto dell'evento cancellazione (deleted)
  aggiornaVista(event) {
    this.contattiservice.getListaContatti().subscribe( risp => this.listacontatti = risp );
  }

}
