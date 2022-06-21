import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  //variables
  banderaAlerta: boolean;
  tipo: string;
  validAlertTypes: string[];
  content: String = "";

  constructor() {
    this.banderaAlerta = false;
    this.tipo = '';
    this.validAlertTypes =['Info','Error','Warning','Success'];
    this.content = "";

   }

  ngOnInit(): void {
    if(!this.validAlertTypes.includes(this.tipo)){
      console.error("Error: los valores para  los tipos de alerta son: info ,error, advertencia, exito \'"
      +"\ usted coloco: "+this.tipo);
      
    }
    if(this.tipo == ""){
      console.error("Error: la tag debe ser usada como:  <text [content]=\"'Your text here.'\" ... ></text>");
    }
  }

  
}


