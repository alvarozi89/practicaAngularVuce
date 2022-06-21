import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tupa-ipen-productos',
  templateUrl: './tupa-ipen-productos.component.html',
  styleUrls: ['./tupa-ipen-productos.component.css']
})
export class TupaIpenProductosComponent implements OnInit {
  typesOfShoes: string[] = ['Productos del reino vegetal  SECCIÓN (01 05)', 'Productos del reino vegetal  SECCIÓN (01 05)', 'Productos del reino vegetal  SECCIÓN (01 05)', 'Productos del reino vegetal  SECCIÓN (01 05)', 'Productos del reino vegetal  SECCIÓN (01 05)'];

  constructor() { }

  ngOnInit(): void {
  }

}
