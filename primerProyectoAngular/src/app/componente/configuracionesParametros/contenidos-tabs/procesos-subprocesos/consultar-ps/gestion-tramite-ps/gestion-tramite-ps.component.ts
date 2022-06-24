import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-tramite-ps',
  templateUrl: './gestion-tramite-ps.component.html',
  styleUrls: ['./gestion-tramite-ps.component.css']
})
export class GestionTramitePSComponent implements OnInit {
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

  mostrarContenidoRegistroSolicitud() {
    this.vistaFormRegistroSolicitud = !this.vistaFormRegistroSolicitud;
    this.activarEditar= !this.activarEditar;
    if(this.icono=="add_circle_outline"){
      this.icono= "remove_circle_outline"
    }
    else{
      this.icono= "add_circle_outline"
    }
  }

  mostrarContenidoCreacionSuce() {
    this.vistaFormCreacionSuce = !this.vistaFormCreacionSuce;
    this.activarEditar= !this.activarEditar;
    if(this.icono=="add_circle_outline"){
      this.icono= "remove_circle_outline"
    }
    else{
      this.icono= "add_circle_outline"
    }
  }

}




