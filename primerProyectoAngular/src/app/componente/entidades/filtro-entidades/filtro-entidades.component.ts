import { Component, OnInit } from '@angular/core';
import { FiltrosTramiteService } from 'src/app/services/filtros-tramite.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-filtro-entidades',
  templateUrl: './filtro-entidades.component.html',
  styleUrls: ['./filtro-entidades.component.css']
})
export class FiltroEntidadesComponent implements OnInit {

  public baseUrl=environment;
  public informacionFiltro: any;
  public informacionTupa: any;
  public informacionFormato: any;
  constructor(
    private filtroTramiteService: FiltrosTramiteService,
  ) { }

  ngOnInit(): void {
    this.listarFiltroTramite();
  }

  listarFiltroTramite(){
    this.filtroTramiteService.obtenerFiltros().subscribe(res=>{
      this.informacionFiltro=res.tipoOperacion;
      this.informacionTupa=res.tupa;
      this.informacionFormato=res.formato;
   
    })
  }



}
