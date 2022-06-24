import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css'],
})
export class BarraComponent implements OnInit {
  links = ['entidades', 'filtro', 'Third'];
  activeLink = this.links[0];
  constructor() { }

  ngOnInit(): void { }
}
