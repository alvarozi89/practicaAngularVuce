import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procesos-subprocesos',
  templateUrl: './procesos-subprocesos.component.html',
  styleUrls: ['./procesos-subprocesos.component.css']
})
export class ProcesosSubprocesosComponent implements OnInit {
  vistaFormProcesos=false
  dataSource = ELEMENT_DATA;
  dataSourceRequisitos = ELEMENT_DATA_REQUISITOS;
  displayedColumns = ['entidad', 'procedimiento', 'codigoTupa', 'fechaCreacion','fechaModificacion', 'acciones'];


  constructor() { }

  ngOnInit(): void {
  }

  mostrarContenidoProcesos() {
    this.vistaFormProcesos = true;

  }


}


export interface ProductosElement {
  entidad: string;
  procedimiento: string;
  codigoTupa: string;
  fechaCreacion: Date;
  fechaModificacion: Date;
  acciones: string;

}

export interface Requisitos {
  obligatorio: string;
  descripcion: string;
  nAdjuntos: number;
  acciones: string;

}

const ELEMENT_DATA: ProductosElement[] = [
  { entidad: 'entidad', procedimiento: 'procedimiento',codigoTupa: 'codigoTupa', fechaCreacion: new Date('dd/mm/yyyy'), fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  { entidad: 'entidad', procedimiento: 'procedimiento',codigoTupa: 'codigoTupa', fechaCreacion: new Date('dd/mm/yyyy'), fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  { entidad: 'entidad', procedimiento: 'procedimiento',codigoTupa: 'codigoTupa', fechaCreacion: new Date('dd/mm/yyyy'), fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
];

const ELEMENT_DATA_REQUISITOS: Requisitos[] = [
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },

]
