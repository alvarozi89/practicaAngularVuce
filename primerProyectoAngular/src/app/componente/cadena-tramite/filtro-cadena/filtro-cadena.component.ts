import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-cadena',
  templateUrl: './filtro-cadena.component.html',
  styleUrls: ['./filtro-cadena.component.css']
})
export class FiltroCadenaComponent implements OnInit {
  habilitarGeneradorResiduos=false;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(valor:string){
    if(valor=="1"){
      this.habilitarGeneradorResiduos=true;
    }
    
  }

}
