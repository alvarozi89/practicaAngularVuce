import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-tramite-ps',
  templateUrl: './gestion-tramite-ps.component.html',
  styleUrls: ['./gestion-tramite-ps.component.css']
})
export class GestionTramitePSComponent implements OnInit {
  vistaFormGestion=false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarContenidoGestion() {
    this.vistaFormGestion = !this.vistaFormGestion;

  }

}




