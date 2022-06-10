import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadesCardComponent } from './componente/entidades/entidades-card/entidades-card.component';
import { FiltroEntidadesComponent } from './componente/entidades/filtro-entidades/filtro-entidades.component';
import { FiltroCadenaComponent } from './componente/cadena-tramite/filtro-cadena/filtro-cadena.component';
import { FiltroIpenComponent } from './componente/ipen/filtro-ipen/filtro-ipen.component';
import { CardIpenComponent } from './componente/ipen/card-ipen/card-ipen.component';


const routes: Routes = [
  {path: 'entidades', component: FiltroEntidadesComponent},
  {path: 'cadena', component: FiltroCadenaComponent},
  {path: 'ipen', component: FiltroIpenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
