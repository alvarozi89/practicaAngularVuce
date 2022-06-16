import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';
  displayedColumns = ['solicitud','fechaRegistro','acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  desplegarComponente(valor:string) {
    
    if(valor =="2") { 
       this.show=true;
    }else if(valor=="1"){
     this.show=false;
    }
   }
}

export interface PeriodicElement {
  solicitud: string;
  fechaRegistro: Date;
  acciones: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { solicitud: '2021009070', fechaRegistro: new Date("dd/mm/yyyy"), acciones: 'prueba' },
]
 