import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadesCardComponent } from './componente/entidades/entidades-card/entidades-card.component';
import { FiltroEntidadesComponent } from './componente/entidades/filtro-entidades/filtro-entidades.component';
import { FiltroCadenaComponent } from './componente/cadena-tramite/filtro-cadena/filtro-cadena.component';
import { FiltroIpenComponent } from './componente/ipen/filtro-ipen/filtro-ipen.component';
import { CardIpenComponent } from './componente/ipen/card-ipen/card-ipen.component';
import { TupaIpenComponent } from './componente/tupa-ipen/tupa-ipen.component';
import { TabsNumberComponent } from './componente/tupa-ipen/tabs-number/tabs-number.component';
import { FiltroSucePreexistenteComponent } from './componente/suce-preexistente/filtro-suce-preexistente/filtro-suce-preexistente.component';
import { TablaComponent } from './componente/mis-favoritos/tabla/tabla.component';
import { PlantillasComponent } from './componente/suce-preexistente/plantillas/plantillas.component';
import { TramitesFrecuentesComponent } from './componente/tramites/tramites-frecuentes/tramites-frecuentes.component';
import { PlantillaSeguimientoTramiteComponent } from './solicitudes/mis-solicitudes/plantilla-seguimiento-tramite/plantilla-seguimiento-tramite.component';
import { MisSolicitudesComponent } from './solicitudes/mis-solicitudes/mis-solicitudes.component';
import { BarraComponent } from './componente/barra/barra.component';



const routes: Routes = [
  {path: '', component: FiltroEntidadesComponent},
  {path: 'entidades', component: FiltroEntidadesComponent},
  {path: 'cadena', component: FiltroCadenaComponent},
  {path: 'ipen', component: FiltroIpenComponent},
  {path: 'tupaipen', component: TupaIpenComponent},
  {path: 'tabsNumber', component: TabsNumberComponent},
  {path: 'sucePreexistente',component: FiltroSucePreexistenteComponent},
  {path: 'mis-favoritos', component: TablaComponent},
  {path: 'plantillas', component: PlantillasComponent},
  {path: 'tramites', component: TramitesFrecuentesComponent},
  {path: 'mis-solicitudes/seguimiento-tramite', component: PlantillaSeguimientoTramiteComponent},
  {path: 'mis-solicitudes', component:MisSolicitudesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
