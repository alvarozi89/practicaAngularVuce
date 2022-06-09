import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadesCardComponent } from './componente/entidades/entidades-card/entidades-card.component';
import { FiltroEntidadesComponent } from './componente/entidades/filtro-entidades/filtro-entidades.component';
const routes: Routes = [
  {path: 'entidades', component: FiltroEntidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
