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

  desplegarComponente(valor: string, idCard: any) {
    this.listarTipoOperacion(idCard);
   
    if (valor == "2") {
      this.show = true;
    } else if (valor == "1") {
      this.show = false;
    }

  }

  listarTipoOperacion(idCard: any){
    this.cardTramiteService.obtenerInformacionCards().subscribe(res=>{
      this.tipoOperacion=res.entidades[idCard].tipoOperacion;
      console.log(this.tipoOperacion)
    })
  }

  listarCard(){
    this.cardTramiteService.obtenerInformacionCards().subscribe(res=>{
      this.informacionCards=res.entidades;
   
    })
  }
}
