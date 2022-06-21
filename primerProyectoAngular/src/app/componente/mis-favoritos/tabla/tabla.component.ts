import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns = ['favoritos', 'entidad', 'tupa', 'formato', 'nombreFormato', 'tramiteCurso', 'tasa', 'plazo', 'acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
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
  tasa: string;
  plazo: string;
  acciones: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa: 'descripcion', formato: 'prueba', nombreFormato: 'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },

];
