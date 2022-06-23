import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos-resolutivos',
  templateUrl: './documentos-resolutivos.component.html',
  styleUrls: ['./documentos-resolutivos.component.css']
})
export class DocumentosResolutivosComponent implements OnInit {
  vistaFormProcesos=false
  dataSource = ELEMENT_DATA;
  dataSourceRequisitos = ELEMENT_DATA_REQUISITOS;
  displayedColumns = ['procedimiento', 'tupa', 'fechaModificacion', 'acciones'];


  constructor() { }

  ngOnInit(): void {
  }

  mostrarContenidoDocResolutivo() {
    this.vistaFormProcesos = true;

}
}

export interface ProductosElement {
  procedimiento: string;
  tupa: string;
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
  { procedimiento: 'procedimiento',tupa: 'tupa', fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  {  procedimiento: 'procedimiento',tupa: 'tupa',fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  {  procedimiento: 'procedimiento',tupa: 'tupa',fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  {  procedimiento: 'procedimiento',tupa: 'tupa',fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  {  procedimiento: 'procedimiento',tupa: 'tupa',fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
  {  procedimiento: 'procedimiento',tupa: 'tupa',fechaModificacion: new Date('dd/mm/yyyy'), acciones: ''},
];

const ELEMENT_DATA_REQUISITOS: Requisitos[] = [
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },

]
