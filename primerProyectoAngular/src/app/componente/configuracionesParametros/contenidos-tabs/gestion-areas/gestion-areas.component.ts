import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-areas',
  templateUrl: './gestion-areas.component.html',
  styleUrls: ['./gestion-areas.component.css']
})
export class GestionAreasComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  dataSourceRequisitos = ELEMENT_DATA_REQUISITOS;
  displayedColumns = ['procedimiento', 'codigoTupa', 'fechaCreacion','fechaModificacion', 'acciones'];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface ProductosElement {

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
  { procedimiento: 'procedimiento',codigoTupa: 'codigoTupa', fechaCreacion: new Date('dd/mm/yyyy'), fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  { procedimiento: 'procedimiento',codigoTupa: 'codigoTupa', fechaCreacion: new Date('dd/mm/yyyy'), fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  { procedimiento: 'procedimiento',codigoTupa: 'codigoTupa', fechaCreacion: new Date('dd/mm/yyyy'), fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
];

const ELEMENT_DATA_REQUISITOS: Requisitos[] = [
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },

]
