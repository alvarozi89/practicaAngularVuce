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
import { TabsComponent } from './componente/configuracionesParametros/tabs/tabs.component';
import { GeneralesComponent } from './componente/configuracionesParametros/contenidos-tabs/generales/generales.component';
import { ProcesosSubprocesosComponent } from './componente/configuracionesParametros/contenidos-tabs/procesos-subprocesos/procesos-subprocesos.component';
import { ConsultarPsComponent } from './componente/configuracionesParametros/contenidos-tabs/procesos-subprocesos/consultar-ps/consultar-ps.component';
import { GestionTramitePSComponent } from './componente/configuracionesParametros/contenidos-tabs/procesos-subprocesos/consultar-ps/gestion-tramite-ps/gestion-tramite-ps.component';
import { ProductosComponent } from './componente/configuracionesParametros/contenidos-tabs/productos/productos.component';
import { DocumentosResolutivosComponent } from './componente/configuracionesParametros/contenidos-tabs/documentos-resolutivos/documentos-resolutivos.component';
const routes: Routes = [
  { path: 'entidades', component: FiltroEntidadesComponent },
  { path: 'cadena', component: FiltroCadenaComponent },
  { path: 'ipen', component: FiltroIpenComponent },
  { path: 'tupaipen', component: TupaIpenComponent },
  { path: 'tabsNumber', component: TabsNumberComponent },
  { path: 'sucePreexistente', component: FiltroSucePreexistenteComponent },
  { path: 'mis-favoritos', component: TablaComponent },
  { path: 'plantillas', component: PlantillasComponent },
  { path: 'tramites', component: TramitesFrecuentesComponent },
  { path: 'configuraciones-parametros', component: TabsComponent },
  { path: 'contenidos-generales', component: GeneralesComponent },
  { path: 'procesos-subprocesos', component: ProcesosSubprocesosComponent },
  { path: 'consultas-PS', component: ConsultarPsComponent },
  { path: 'gestion-tramite-PS', component: GestionTramitePSComponent },
  { path: 'productos-PS', component:ProductosComponent},
  { path: 'documentosResolutivos-PS', component:DocumentosResolutivosComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
