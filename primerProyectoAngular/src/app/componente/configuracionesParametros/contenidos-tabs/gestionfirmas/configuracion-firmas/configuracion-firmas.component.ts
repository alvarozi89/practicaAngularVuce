import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-configuracion-firmas',
  templateUrl: './configuracion-firmas.component.html',
  styleUrls: ['./configuracion-firmas.component.css']
})
export class ConfiguracionFirmasComponent implements OnInit {
  vistaFormTramite=false;
  activarEditar=true;
  vistaFormCreacionSuce=false
  icono="add_circle_outline"
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Motivo'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  mostrarContenidoGestionTramite() {
    this.vistaFormTramite = !this.vistaFormTramite;
    this.activarEditar= !this.activarEditar;
    if(this.icono=="add_circle_outline"){
      this.icono= "remove_circle_outline"
    }
    else{
      this.icono= "add_circle_outline"
    }
  }

}

interface Food {
  value: string;
  viewValue: string;
}
