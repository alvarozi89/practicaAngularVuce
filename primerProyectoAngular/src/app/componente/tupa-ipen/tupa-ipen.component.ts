import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from 'dynamic-form/src/lib/dynamic-form.component'


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
  title = 'formsTest';
  panelOpenState = false;
  public formData: JsonFormData;
  displayedColumns = ['fechaRegistro', 'etapa', 'descripcion', 'fechaEstimada', 'responsable'];
  dataSource = ELEMENT_DATA;

  constructor(private http: HttpClient) {
    this.formData = {controls:[]};
  }
  ngOnInit(): void {  this.http
    .get('/assets/my-form-rl.json')
    .subscribe((formData: any) => {
      this.formData = formData;
    });
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
  

  

