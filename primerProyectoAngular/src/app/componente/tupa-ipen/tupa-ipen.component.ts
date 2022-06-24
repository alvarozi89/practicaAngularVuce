import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from 'projects/dynamic-form/src/lib/dynamic-form.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


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
  displayedColumns = ['fechaRegistro', 'etapa', 'descripcion', 'fechaEstimada', ];
  dataSource = ELEMENT_DATA;

  /*FormGroup con todos los datos del formulario de formData */
  formDataRetrieved = new FormGroup({
    /*Poner aqui los campos base que están en el mismo <form> de formData así:
    miCampoBase: new FormControl()
    ... */
   });

   /*FormGroup con todos los datos del formulario de formDataDetalle */
  formDataDetalleRetrieved = new FormGroup({ 
    /*Poner aqui los campos base que están en el mismo <form> de formDataDetalle así:
    miCampoBase: new FormControl()
    ... */
  });

  constructor(private http: HttpClient) {
    this.formData = {controls:[]};
    this.formDataDetalle = {controls:[]};
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
  }

  habilitarBoton(){
    this.disabledButton = !this.disabledButton;

  }

  habilitarRegistroTramite(){
    this.disabledRegistroTramite = !this.disabledRegistroTramite;

  }

  /**agrega los controles de form a formDataRetrieved */
  getDynamicFormData(form: FormGroup){
    Object.keys(form.value).forEach(key =>{
      this.formDataRetrieved.addControl(key, form.controls[key]); 
    })
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




