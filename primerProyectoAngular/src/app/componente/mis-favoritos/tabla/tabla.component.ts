import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns = ['entidad', 'tupa', 'formato', 'fechaEstimada', ];
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
  fechaRegistro: Date;
  etapa: string;
  descripcion: string;
  fechaEstimada: Date;
  responsable: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {fechaRegistro: new Date ('dd/mm/yyyy'), etapa: 'prueba', descripcion:'descripcion', fechaEstimada:new Date('dd/mm/yyyy'), responsable:'responsable'},
  {fechaRegistro: new Date ('dd/mm/yyyy'), etapa: 'prueba', descripcion:'descripcion', fechaEstimada:new Date('dd/mm/yyyy'), responsable:'responsable'},
  {fechaRegistro: new Date ('dd/mm/yyyy'), etapa: 'prueba', descripcion:'descripcion', fechaEstimada:new Date('dd/mm/yyyy'), responsable:'responsable'},
];
