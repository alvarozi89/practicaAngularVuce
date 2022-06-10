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

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FiltroEntidadesComponent,
    EntidadesCardComponent,
    FiltroCadenaComponent,
    CardTramiteComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
