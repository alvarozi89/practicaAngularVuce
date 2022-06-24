import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-plantilla-seguimiento-tramite',
  templateUrl: './plantilla-seguimiento-tramite.component.html',
  styleUrls: ['./plantilla-seguimiento-tramite.component.css']
})
export class PlantillaSeguimientoTramiteComponent implements OnInit {
  //Declaraciones
  panelOpenState = false;

  displayedColumnsPlantilla = ['monto', 'cpb', 'fechaGeneracion', 'fechaOperacion', 'estado', 'acciones'];
  dataSourcePlantilla = new MatTableDataSource<SeguimientoTramite>(ELEMENT_DATA);
  displayedColumns = ['fechaRegistro', 'etapa', 'descripcion', 'fechaEstimada', ];
  dataSource = ELEMENT_DATA_TRAZABILIDAD;

  //constructor
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  fechaRegistro: Date;
  etapa: string;
  descripcion: string;
  fechaEstimada: Date;
  responsable: string;

}
export interface SeguimientoTramite {
  monto:string;
  cpb: string;
  fechaGeneracion: Date;
  fechaOperacion: Date;
  estado: string;
  acciones: string;

}
const ELEMENT_DATA: SeguimientoTramite[] = [
  {monto:'S/31.00', cpb: '848220200071486100', fechaGeneracion:new Date('dd/mm/yyyy'), fechaOperacion:new Date('dd/mm/yyyy'),estado:'Pendiente pago',acciones:'cadena'},
  {monto:'S/31.00', cpb: '848220200071486100', fechaGeneracion:new Date('dd/mm/yyyy'), fechaOperacion:new Date('dd/mm/yyyy'),estado:'Pendiente pago',acciones:'cadena'},
  {monto:'S/31.00', cpb: '848220200071486100', fechaGeneracion:new Date('dd/mm/yyyy'), fechaOperacion:new Date('dd/mm/yyyy'),estado:'Pendiente pago',acciones:'cadena'}

];

const ELEMENT_DATA_TRAZABILIDAD: PeriodicElement[] = [
  { fechaRegistro: new Date('dd/mm/yyyy'), etapa: 'prueba', descripcion: 'descripcion', fechaEstimada: new Date('dd/mm/yyyy'), responsable: 'responsable' },
  { fechaRegistro: new Date('dd/mm/yyyy'), etapa: 'prueba', descripcion: 'descripcion', fechaEstimada: new Date('dd/mm/yyyy'), responsable: 'responsable' },
  { fechaRegistro: new Date('dd/mm/yyyy'), etapa: 'prueba', descripcion: 'descripcion', fechaEstimada: new Date('dd/mm/yyyy'), responsable: 'responsable' },
];