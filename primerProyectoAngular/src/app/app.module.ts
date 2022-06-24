import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

import { FiltroEntidadesComponent } from './componente/entidades/filtro-entidades/filtro-entidades.component';
import { EntidadesCardComponent } from './componente/entidades/entidades-card/entidades-card.component';
import { FiltroCadenaComponent } from './componente/cadena-tramite/filtro-cadena/filtro-cadena.component';
import { CardTramiteComponent } from './componente/cadena-tramite/card-tramite/card-tramite.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { CardIpenComponent } from './componente/ipen/card-ipen/card-ipen.component';
import { FiltroIpenComponent } from './componente/ipen/filtro-ipen/filtro-ipen.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TupaIpenComponent } from './componente/tupa-ipen/tupa-ipen.component';

import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  MatNativeDateModule} from '@angular/material/core';
import {  HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from '../../projects/dynamic-form/src/public-api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TabsNumberComponent } from './componente/tupa-ipen/tabs-number/tabs-number.component';
import { MatInputModule } from '@angular/material/input';

import {MatStepperModule} from '@angular/material/stepper';

import { MaterialAllModule } from '../../projects/dynamic-form/src/material.module';



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
    TabsNumberComponent
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
    MatFormFieldModule,

    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    MaterialAllModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
