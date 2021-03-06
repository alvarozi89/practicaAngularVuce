import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FiltroEntidadesComponent } from './componente/entidades/filtro-entidades/filtro-entidades.component';
import { EntidadesCardComponent } from './componente/entidades/entidades-card/entidades-card.component';
import { FiltroCadenaComponent } from './componente/cadena-tramite/filtro-cadena/filtro-cadena.component';
import { CardTramiteComponent } from './componente/cadena-tramite/card-tramite/card-tramite.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { CardIpenComponent } from './componente/ipen/card-ipen/card-ipen.component';
import { FiltroIpenComponent } from './componente/ipen/filtro-ipen/filtro-ipen.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TupaIpenComponent } from './componente/tupa-ipen/tupa-ipen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from '../../projects/dynamic-form/src/public-api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TabsNumberComponent } from './componente/tupa-ipen/tabs-number/tabs-number.component';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MaterialAllModule } from '../../projects/dynamic-form/src/material.module';
import { FiltroSucePreexistenteComponent } from './componente/suce-preexistente/filtro-suce-preexistente/filtro-suce-preexistente.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from './componente/mis-favoritos/tabla/tabla.component';
import { PlantillasComponent } from './componente/suce-preexistente/plantillas/plantillas.component';
import { TramitesFrecuentesComponent } from './componente/tramites/tramites-frecuentes/tramites-frecuentes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AlertasComponent } from './componente/alertas/alertas.component';
import { TabsComponent } from './componente/configuracionesParametros/tabs/tabs.component';
import { GeneralesComponent } from './componente/configuracionesParametros/contenidos-tabs/generales/generales.component';
import { ProcesosSubprocesosComponent } from './componente/configuracionesParametros/contenidos-tabs/procesos-subprocesos/procesos-subprocesos.component';
import { ProductosComponent } from './componente/configuracionesParametros/contenidos-tabs/productos/productos.component';
import { ConsultarPsComponent } from './componente/configuracionesParametros/contenidos-tabs/procesos-subprocesos/consultar-ps/consultar-ps.component';
import { GestionTramitePSComponent } from './componente/configuracionesParametros/contenidos-tabs/procesos-subprocesos/consultar-ps/gestion-tramite-ps/gestion-tramite-ps.component';
import { GestionAreasComponent } from './componente/configuracionesParametros/contenidos-tabs/gestion-areas/gestion-areas.component';
import { ConfiguracionesGestionAreasComponent } from './componente/configuracionesParametros/contenidos-tabs/gestion-areas/configuraciones-gestion-areas/configuraciones-gestion-areas.component';
import { DocumentosResolutivosComponent } from './componente/configuracionesParametros/contenidos-tabs/documentos-resolutivos/documentos-resolutivos.component';
import { DocumentosComponent } from './componente/configuracionesParametros/contenidos-tabs/documentos/documentos.component';
import { DocumentosDigitalizadosComponent } from './componente/configuracionesParametros/contenidos-tabs/documentos/documentos-digitalizados/documentos-digitalizados.component';
import { ConfiguracionVisualizacionDocumentosComponent } from './componente/configuracionesParametros/contenidos-tabs/documentos/configuracion-visualizacion-documentos/configuracion-visualizacion-documentos.component';
import { ConfiguracionEmisionComponent } from './componente/configuracionesParametros/contenidos-tabs/documentos-resolutivos/configuracion-emision/configuracion-emision.component';
import { GestionfirmasComponent } from './componente/configuracionesParametros/contenidos-tabs/gestionfirmas/gestionfirmas.component';
import { ConfiguracionFirmasComponent } from './componente/configuracionesParametros/contenidos-tabs/gestionfirmas/configuracion-firmas/configuracion-firmas.component';
import { MisSolicitudesComponent } from './solicitudes/mis-solicitudes/mis-solicitudes.component';
import { FiltroMisSolicitudesComponent } from './solicitudes/mis-solicitudes/filtro-mis-solicitudes/filtro-mis-solicitudes.component';
import { PlantillaSeguimientoTramiteComponent } from './solicitudes/mis-solicitudes/plantilla-seguimiento-tramite/plantilla-seguimiento-tramite.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FiltroEntidadesComponent,
    EntidadesCardComponent,
    FiltroCadenaComponent,
    CardTramiteComponent,
    CardIpenComponent,
    FiltroIpenComponent,
    TupaIpenComponent,
    TabsNumberComponent,
    FiltroSucePreexistenteComponent,
    TablaComponent,
    PlantillasComponent,
    TramitesFrecuentesComponent,
    AlertasComponent,
    TabsComponent,
    GeneralesComponent,
    ProcesosSubprocesosComponent,
    ProductosComponent,
    ConsultarPsComponent,
    GestionTramitePSComponent,
    GestionAreasComponent,
    ConfiguracionesGestionAreasComponent,
    DocumentosResolutivosComponent,
    DocumentosComponent,
    DocumentosDigitalizadosComponent,
    ConfiguracionEmisionComponent,
    GestionfirmasComponent,
    ConfiguracionVisualizacionDocumentosComponent,
    ConfiguracionFirmasComponent,
    MisSolicitudesComponent,
    FiltroMisSolicitudesComponent,
    PlantillaSeguimientoTramiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatRadioModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    CommonModule,
    DynamicFormModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    MaterialAllModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    MatCheckboxModule,
    MatExpansionModule,
  ],

  entryComponents: [DocumentosDigitalizadosComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
