import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from 'dynamic-form/src/lib/dynamic-form.component'
import {FormBuilder, Validators} from '@angular/forms';


interface FixedOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tupa-ipen',
  templateUrl: './tupa-ipen.component.html',
  styleUrls: ['./tupa-ipen.component.css']
})
export class TupaIpenComponent implements OnInit {
  checked = false;
  indeterminate = true;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  disabledButton = true;
  disabledRegistroTramite = true;

  title = 'formsTest';
  panelOpenState = false;
  public formData: JsonFormData;
  public formDataDetalle: JsonFormData;
  public formDataDetalleSerfor: JsonFormData;
  displayedColumns = ['fechaRegistro', 'etapa', 'descripcion', 'fechaEstimada', ];
  dataSource = ELEMENT_DATA;

  constructor(private http: HttpClient) {
    this.formData = {controls:[]};
    this.formDataDetalle = {controls:[]};
    this.formDataDetalleSerfor = {controls:[]};
  }
  ngOnInit(): void {  this.http
    .get('/assets/my-form-rl.json')
    .subscribe((formData: any) => {
      this.formData = formData;
    });
    this.http
    .get('/assets/my-form-detalle.json')
    .subscribe((formDataDetalle: any) => {
      this.formDataDetalle = formDataDetalle;
    });
    this.http
    .get('/assets/my-form-detalle-serfor.json')
    .subscribe((formDataDetalleSerfor: any) => {
      this.formDataDetalleSerfor = formDataDetalleSerfor;
    });
  }

  habilitarBoton(){
    this.disabledButton = !this.disabledButton;

  }

  habilitarRegistroTramite(){
    this.disabledRegistroTramite = !this.disabledRegistroTramite;

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




