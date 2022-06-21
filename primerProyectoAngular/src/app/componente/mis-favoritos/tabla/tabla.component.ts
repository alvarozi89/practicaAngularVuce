import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/notification.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns = ['favoritos','entidad', 'tupa', 'formato', 'nombreFormato', 'tramiteCurso', 'tasa', 'plazo', 'acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   
  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }

  }
  constructor(private notifyService : NotificationService) { }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
  //Notificaciónes de alerta
  title = 'toaster-not';
   
  showToasterSuccess(){
      this.notifyService.showSuccess("Agregada a mis favoritos exitosamente", "Éxito");
     
  }

  funcion(){
    this.notifyService.showError("Something is wrong", "tutsmake.com");
  }
 /*  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "tutsmake.com")
  }
   
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "tutsmake.com")
  }
   
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "tutsmake.com")
  }*/


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
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  { favoritos: 'icono', entidad: 'prueba', tupa:'descripcion', formato:'prueba', nombreFormato:'prueba', tramiteCurso: 2, tasa: 'prueba', plazo: 'prueba', acciones: 'prueba' },
  
];
