import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder} from '@angular/forms';
import { NotificationService } from 'src/app/notification.service';


@Component({
  selector: 'app-configuracion-emision',
  templateUrl: './configuracion-emision.component.html',
  styleUrls: ['./configuracion-emision.component.css']
})
export class ConfiguracionEmisionComponent implements OnInit {
    displayedColumns = ['tipoDocumentoDR', 'acciones'];
    dataSource = new MatTableDataSource<ConfigemiElement>(ELEMENT_DATA);
    
    

  constructor(private notifyService: NotificationService) { }

  ngOnInit(): void {
  }


  showToasterSuccess() {
    this.notifyService.showSuccess("Su configuración se ha guardado exitosamente.", "Exito!")
 

  }

}

export interface ConfigemiElement {
  tipoDocumentoDR: string;
  acciones: string;

}


const ELEMENT_DATA: ConfigemiElement[] = [
  {  tipoDocumentoDR: 'Resoluciones Directorales', acciones: ''},
  {  tipoDocumentoDR: 'Carta de Notificación', acciones: ''},
  {  tipoDocumentoDR: 'Resoluciones directorales', acciones: ''},
  {  tipoDocumentoDR: 'Autorizaciones', acciones: ''},
];

