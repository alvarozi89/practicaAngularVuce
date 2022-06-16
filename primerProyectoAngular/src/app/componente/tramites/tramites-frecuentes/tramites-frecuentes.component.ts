import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-tramites-frecuentes',
  templateUrl: './tramites-frecuentes.component.html',
  styleUrls: ['./tramites-frecuentes.component.css']
})
export class TramitesFrecuentesComponent implements OnInit {
  displayedColumns = ['favoritos','entidad', 'tupa', 'formato', 'nombreFormato', 'tramiteCurso', 'tasa', 'plazo', 'acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   
  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }

  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  
  }

}
export interface PeriodicElement {
  favoritos: string,
  entidad: string;
  tupa: string;
  formato: string;
  nombreFormato: string;
  tramiteCurso: number;
  tasa:string;
  plazo:string;
  acciones: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
]
