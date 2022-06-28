import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-tramites-frecuentes',
  templateUrl: './tramites-frecuentes.component.html',
  styleUrls: ['./tramites-frecuentes.component.css']
})
export class TramitesFrecuentesComponent implements OnInit {
  displayedColumns = ['favoritos', 'entidad', 'tupa', 'formato', 'nombreFormato', 'tramiteCurso', 'tasa', 'plazo', 'acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  elementDataAux = JSON.parse(JSON.stringify(ELEMENT_DATA));

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
  
  setFavorite(element: any) {
    var idx = this.elementDataAux.findIndex((x:any) => x.tupa === element.tupa);
    this.elementDataAux[idx].favoritos = !this.elementDataAux[idx].favoritos;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.elementDataAux);
  }
}
export interface PeriodicElement {
  favoritos: boolean,
  entidad: string;
  tupa: string;
  formato: string;
  nombreFormato: string;
  tramiteCurso: number;
  tasa: string;
  plazo: string;
  acciones: string;

}

const ELEMENT_DATA: PeriodicElement[] =[
  { "favoritos": true, "entidad": "Vinder", "tupa": "63517-523", "formato": "Lion, asian", "nombreFormato": "Panthera leo persica", "tramiteCurso": 5, "tasa": "$0.05", "plazo": "4", "acciones": "forecast" }, 
  { "favoritos": false, "entidad": "Kare", "tupa": "21695-600", "formato": "Roan antelope", "nombreFormato": "Hippotragus equinus", "tramiteCurso": 6, "tasa": "$2.44", "plazo": "12", "acciones": "Sharable" }, 
  { "favoritos": false, "entidad": "Brainverse", "tupa": "0087-2773", "formato": "Stone sheep", "nombreFormato": "Ovis dalli stonei", "tramiteCurso": 4, "tasa": "$0.03", "plazo": "3", "acciones": "Programmable" }, 
  { "favoritos": false, "entidad": "Realfire", "tupa": "0245-0147", "formato": "Common pheasant", "nombreFormato": "Phasianus colchicus", "tramiteCurso": 5, "tasa": "$3.02", "plazo": "8", "acciones": "Right-sized" }, 
  { "favoritos": true, "entidad": "Brainsphere", "tupa": "10237-834", "formato": "Silver-backed jackal", "nombreFormato": "Canis mesomelas", "tramiteCurso": 7, "tasa": "$7.35", "plazo": "4", "acciones": "software" }, 
  { "favoritos": true, "entidad": "Zoomzone", "tupa": "0573-0133", "formato": "Vulture, lappet-faced", "nombreFormato": "Aegypius tracheliotus", "tramiteCurso": 1, "tasa": "$0.31", "plazo": "11", "acciones": "moderator" }, 
  { "favoritos": false, "entidad": "Skilith", "tupa": "60429-163", "formato": "North American red fox", "nombreFormato": "Vulpes vulpes", "tramiteCurso": 7, "tasa": "$8.56", "plazo": "2", "acciones": "encompassing" }, 
  { "favoritos": true, "entidad": "Katz", "tupa": "36987-3444", "formato": "Kori bustard", "nombreFormato": "Choriotis kori", "tramiteCurso": 8, "tasa": "$4.44", "plazo": "4", "acciones": "Cross-group" }
]
