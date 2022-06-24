import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-filtro-mis-solicitudes',
  templateUrl: './filtro-mis-solicitudes.component.html',
  styleUrls: ['./filtro-mis-solicitudes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FiltroMisSolicitudesComponent implements OnInit {


  columnsToDisplay = ['formato', 'numeroTramite', 'expediente','estado','dias','fecha'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: PeriodicElement | null | undefined;
  columnas=[
    {titulo:"Formato", id:"formato"},
    {titulo:"Número Trámite", id:"numeroTramite"},
    {titulo:"Expediente", id:"expediente"},
    {titulo:"Estado", id:"estado"},
    {titulo:"Días", id:"dias"},
    {titulo:"Fecha", id:"fecha"},
  ];
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }

  constructor() {

  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

 
}

export interface PeriodicElement {
  formato: string;
  numeroTramite: string;
  position: number;
  expediente: string;
  estado: string;
  color: string;
  dias: string;
  fecha: string;
  nombre: string;
  entidad: string;
  tupa: number;
  fechaActualizacion:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Pendiente respuesta de entidad',
    color: 'orange',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'

  },
  {
    position: 2,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Pendiente respuesta de entidad',
    color: 'orange',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
  {
    position: 3,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Pendiente respuesta de entidad',
    color: 'orange',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
  {
    position: 4,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    color: 'orange',
    estado: 'Pendiente respuesta de entidad',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
  {
    position: 5,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Aprobado',
    color: 'green',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
  {
    position: 6,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Aprobado',
    color: 'green',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
  {
    position: 7,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Aprobado',
    color: 'green',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
  {
    position: 8,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Aprobado',
    color: 'green',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
  {
    position: 9,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Aprobado',
    color: 'green',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
  {
    position: 10,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Pendiente respuesta de entidad',
    color: 'orange',
    dias: '0 de 5 días',
    fecha: '00/00/0000',
    nombre: `Permiso para importación o re-exportación de flora y fauna silvestre`,
    entidad:'SERFOR',
    tupa: 34,
    fechaActualizacion: '00/00/0000'
  },
];
