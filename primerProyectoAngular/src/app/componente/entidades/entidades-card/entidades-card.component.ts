import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entidades-card',
  templateUrl: './entidades-card.component.html',
  styleUrls: ['./entidades-card.component.css']
})
export class EntidadesCardComponent implements OnInit {

  constructor() { }


  public show: boolean = false;
  public buttonName: any = 'Show';

  ngOnInit() {

  }

  desplegarComponente(valor: string) {

    if (valor == "2") {
      this.show = true;
    } else if (valor == "1") {
      this.show = false;
    }
  }
}
