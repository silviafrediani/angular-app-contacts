import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// importare i componenti a cui fanno riferimento le rotte
import { ListaComponent } from './lista/lista.component';
import { ModificaComponent } from './modifica/modifica.component';
import { NuovoComponent } from './nuovo/nuovo.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'modifica/:id', component: ModificaComponent},
  {path: 'nuovo', component: NuovoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
