import { Component, OnInit } from '@angular/core';
import { CardsTramiteService } from 'src/app/services/cards-tramite.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-entidades-card',
  templateUrl: './entidades-card.component.html',
  styleUrls: ['./entidades-card.component.css']
})
export class EntidadesCardComponent implements OnInit {

  constructor( private cardTramiteService: CardsTramiteService) { }
  public baseUrl=environment;
  public informacionCards: any;
  public tipoOperacion:any;
  public show: boolean = false;
  public buttonName: any = 'Show';
  ngOnInit() {
    this.listarCard();
  }

  desplegarComponente(valor: boolean, idCard: any) {
    console.log(this.informacionCards);
    this.listarTipoOperacion(idCard);
    console.log(this.informacionCards[idCard].habilitar=valor);
    console.log(this.informacionCards);

  }

  listarTipoOperacion(idCard: any){
    this.cardTramiteService.obtenerInformacionCards().subscribe(res=>{
      this.tipoOperacion=res.entidades[idCard].tipoOperacion;
    })
  }

  listarCard(){
    this.cardTramiteService.obtenerInformacionCards().subscribe(res=>{
      this.informacionCards=res.entidades;
   
    })
  }
}
