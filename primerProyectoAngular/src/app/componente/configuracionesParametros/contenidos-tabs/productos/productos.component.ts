import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  vistaFormProcesos=false
  dataSource = ELEMENT_DATA;
  dataSourceRequisitos = ELEMENT_DATA_REQUISITOS;
  displayedColumns = ['entidad', 'procedimiento', 'tupa', 'acciones'];


  constructor() { }

  ngOnInit(): void {
  }

  mostrarContenidoProductos() {
    this.vistaFormProcesos = true;

  }
}

export interface ProductosElement {
  entidad: string;
  procedimiento: string;
  tupa: string;
  acciones: string;

}

export interface Requisitos {
  obligatorio: string;
  descripcion: string;
  nAdjuntos: number;
  acciones: string;

}

const ELEMENT_DATA: ProductosElement[] = [
  { entidad: 'entidad', procedimiento: 'procedimiento',tupa: 'tupa', acciones: ''},
  { entidad: 'entidad', procedimiento: 'procedimiento',tupa: 'tupa', acciones: ''},
  { entidad: 'entidad', procedimiento: 'procedimiento',tupa: 'tupa', acciones: ''},
  { entidad: 'entidad', procedimiento: 'procedimiento',tupa: 'tupa', acciones: ''},
  { entidad: 'entidad', procedimiento: 'procedimiento',tupa: 'tupa', acciones: ''},
  { entidad: 'entidad', procedimiento: 'procedimiento',tupa: 'tupa', acciones: ''},
];

const ELEMENT_DATA_REQUISITOS: Requisitos[] = [
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },

]
