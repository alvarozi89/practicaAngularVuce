import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-tramite',
  templateUrl: './card-tramite.component.html',
  styleUrls: ['./card-tramite.component.css']
})
export class CardTramiteComponent implements OnInit {
   habilitarGeneradorResiduos: boolean =true;
   public show: boolean = false;
   public showTexto: boolean = false;
  constructor() {
   
   }

  ngOnInit(): void {
  }
 
  desplegarComponente(valor: string) {

    if (valor == "2") {
      this.show = true;
    } else if (valor == "1") {
      this.show = false;
    }
  }

  desplegarComponenteTexto(valorTexto: string) {

    if (valorTexto == "2") {
      this.showTexto = true;
    } else if (valorTexto == "1") {
      this.showTexto = false;
    }
  }
}
