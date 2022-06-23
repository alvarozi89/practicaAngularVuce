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
import { DynamicFormModule } from 'dynamic-form/src/public-api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TabsNumberComponent } from './componente/tupa-ipen/tabs-number/tabs-number.component';
import { MatInputModule } from '@angular/material/input';

import { MatStepperModule } from '@angular/material/stepper';

import { MaterialExampleModule } from 'dynamic-form/src/material.module';
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
    MatPaginatorModule,
    MaterialExampleModule,
    MatTableModule,
    MaterialExampleModule,
    MatDialogModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    ToastContainerModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
