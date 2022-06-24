import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-configuracion-visualizacion-documentos',
  templateUrl: './configuracion-visualizacion-documentos.component.html',
  styleUrls: ['./configuracion-visualizacion-documentos.component.css']
})
export class ConfiguracionVisualizacionDocumentosComponent implements OnInit {
  panelOpenState = false
  vistaFormTramite=false;
  vistaOpciones = false;
  vistaOpciones2 = false;
  activarEditar=true;
  icono="add_circle_outline"
  icono2="add_circle_outline"
  icono3="add_circle_outline"

  toppings = this._formBuilder.group({
    opcion1: false,
    opcion2: false,
    opcion3: false,
    opcion4: false,
  });

  constructor(private _formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  mostrarContenidoGestionTramite() {
    this.vistaFormTramite = !this.vistaFormTramite;
    this.activarEditar= !this.activarEditar;
    if(this.icono=="add_circle_outline"){
      this.icono= "remove_circle_outline"
    }
    else{
      this.icono= "add_circle_outline"
    }
  }

  mostrarOpciones() {
    this.vistaOpciones = !this.vistaOpciones;
    if(this.icono2=="add_circle_outline"){
      this.icono2= "remove_circle_outline"
    }
    else{
      this.icono2= "add_circle_outline"
    }
  }

  mostrarOpciones2() {
    this.vistaOpciones2 = !this.vistaOpciones2;
    if(this.icono3=="add_circle_outline"){
      this.icono3= "remove_circle_outline"
    }
    else{
      this.icono3= "add_circle_outline"
    }
  }

  
}

