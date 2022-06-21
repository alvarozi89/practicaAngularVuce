import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabs-number',
  templateUrl: './tabs-number.component.html',
  styleUrls: ['./tabs-number.component.css']
})
export class TabsNumberComponent implements OnInit {

  public boton_pulsado: boolean = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  funcion() {
    this.boton_pulsado = !this.boton_pulsado;
  }


}
