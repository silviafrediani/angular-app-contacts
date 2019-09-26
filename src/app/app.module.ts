import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// servizio http
import { HttpClientModule } from '@angular/common/http';
// angular material accordion
import { MatExpansionModule } from '@angular/material/expansion';
// angular material icon and button
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// angular material form field
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
// ng-boostrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// questi componenti vengono messi in questo file automaticamente quando si fa ng g component da riga di comando
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './lista/lista.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ModificaComponent } from './modifica/modifica.component';
import { NuovoComponent } from './nuovo/nuovo.component';
import { Modifica2Component } from './modifica2/modifica2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaComponent,
    DettaglioComponent,
    ModificaComponent,
    NuovoComponent,
    Modifica2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // importare i moduli che via via si aggiungono qui
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
