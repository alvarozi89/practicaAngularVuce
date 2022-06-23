import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-filtro-mis-solicitudes',
  templateUrl: './filtro-mis-solicitudes.component.html',
  styleUrls: ['./filtro-mis-solicitudes.component.css']
})
export class FiltroMisSolicitudesComponent implements OnInit {

  esTablaExpandida = false;

  public show: boolean = false;



  displayedColumns = ['formato', 'numeroTramite', 'expediente', 'estado', 'dias', 'fecha', 'acciones', 'actions'];
  dataSourceMisSolicitudes = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSourceMisSolicitudes) {
      this.dataSourceMisSolicitudes.paginator = value;
    }
  }

  constructor() {

  }

  ngOnInit(): void {
    this.dataSourceMisSolicitudes.paginator = this.paginator;
  }



   expandirTabla(bandera: boolean) {
     if (bandera == false) {
       this.show = false
     } else if (bandera == true) {
       this.show = true;
     }
   }
}

export interface PeriodicElement {
  formato: string;
  numeroTramite: string;
  expediente: string;
  estado: string;
  dias: string;
  fecha: string;
  acciones: string;
  despliegues?: any[];
  id: number;
  esExpandible:boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Pendiente respuesta de entidad',
    dias: '0 a 5 dias', fecha: '00/00/0000',
    acciones: 'prueba',
    esExpandible: false,
    despliegues: [
      {
        entidadLabel: "Entidad",
        entidad: "SERFOR",
        tupaLabel: "TUPA",
        tupa: "34"
      },
      {
        nombreLabel: "Nombre",
        nombre: "Permiso para importación o re-exportación de flora y fauna silvestres",
        fechaLabel: "Fecha de actualización",
        fecha: "00/00/0000"
      },
    ]
  },
  {
    id:2,
    formato: 'DGF002',
    numeroTramite: '2022002890',
    expediente: '106-2020-CLV',
    estado: 'Pendiente respuesta de entidad',
    dias: '0 a 5 dias',
    fecha: '00/00/0000',
    acciones: 'prueba',
    esExpandible: false,
    despliegues: [
      {
       
        entidad: "SERFOR",
        tupa: "34"
      },
      {
        nombreLabel: "Nombre",
        nombre: "Permiso para importación o re-exportación de flora y fauna silvestres",
        fechaLabel: "Fecha de actualización",
        fecha: "00/00/0000"
      },
    ]
  }
];
