import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { NotificationService } from 'src/app/notification.service';
@Component({
  selector: 'app-tramites-frecuentes',
  templateUrl: './tramites-frecuentes.component.html',
  styleUrls: ['./tramites-frecuentes.component.css']
})
export class TramitesFrecuentesComponent implements OnInit {
  displayedColumns = ['favoritos', 'entidad', 'tupa', 'formato', 'nombreFormato', 'tramiteCurso', 'tasa', 'plazo', 'acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }

  }

  constructor(private notifyService : NotificationService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  title = 'toaster-not';
  mostrar = true;
  mostrarEstrella = false;

  showToasterSuccess(valor: string ){
      if(valor == '1'){
        this.mostrar = false;
        this.mostrarEstrella = true;
        this.notifyService.showSuccess("Agregada a mis favoritos exitosamente", "Éxito");

      }else if (valor == "2") {
        this.mostrar = true;
        this.mostrarEstrella = false;
        this.notifyService.showSuccess("Se ha eliminado de mis favoritos exitosamente", "Éxito");
      }
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
]
