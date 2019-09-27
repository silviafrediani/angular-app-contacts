import {Component, Input, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Contatto } from '../interfaces/contatto';
import { ContattiService } from '../contatti.service';
// importo servizio Router per fare il navigate
import { Router } from '@angular/router';
// importo modulo configurazione ng-boostrap accordion
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { DettaglioComponent } from '../dettaglio/dettaglio.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, AfterViewInit {

  // "guardo dentro" al DOM della vista e stabilisco come variabili (proprietà) della classe del componente i riferimenti che nel template ho marchiato con #
  // d'ora in poi ci posso accedere come this.nomeElemento.nativeElement
  // @ViewChild("appdettaglio", {static: false}) appdettaglio;
  // @ViewChild("appmodifica2", {static: false}) appmodifica2;

  @ViewChild(DettaglioComponent, {static: false}) child: DettaglioComponent;

  listacontatti: Contatto[] = [];

  constructor(private contattiservice: ContattiService, private router: Router, private config: NgbAccordionConfig) {
    // customize default values of ng-boostrap accordion
    this.config.closeOthers = true;
  }
  ngOnInit() {
    // subscribe è un metodo necessario per gestire dati che arrivano da un Observable
    this.contattiservice.getListaContatti().subscribe( risp => this.listacontatti = risp );
  }
  ngAfterViewInit() {
    console.log(this.child.mostraSezioneModifica);
  }
  // metodo che viene richiamato quando questo componente che è in ascolto,
  // riceve l'evento updated che viene scatenato dal figlio Modifica
  modificaContatto2(event) {
    console.log(event);
    // this.appmodifica2.nativeElement.style.display = 'none';
    // this.appdettaglio.nativeElement.style.display = 'block';
  }
  nuovoContatto() {
    this.router.navigate(['/nuovo/']);
  }
  // metodo richiamato in seguito all'ascolto dell'evento cancellazione (deleted)
  aggiornaVista(event) {
    this.contattiservice.getListaContatti().subscribe( risp => this.listacontatti = risp );
  }

}
