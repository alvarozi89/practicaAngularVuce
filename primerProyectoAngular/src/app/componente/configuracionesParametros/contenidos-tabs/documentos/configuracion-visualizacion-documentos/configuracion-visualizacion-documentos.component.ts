import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion-visualizacion-documentos',
  templateUrl: './configuracion-visualizacion-documentos.component.html',
  styleUrls: ['./configuracion-visualizacion-documentos.component.css']
})
export class ConfiguracionVisualizacionDocumentosComponent implements OnInit {
  vistaFormTramite=false;
  vistaFormRegistroSolicitud= false;
  activarEditar=true;
  vistaFormCreacionSuce=false
  icono="add_circle_outline"

  constructor() { }

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

  
}
