import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-gestionfirmas',
  templateUrl: './gestionfirmas.component.html',
  styleUrls: ['./gestionfirmas.component.css']
})
export class GestionfirmasComponent implements OnInit {
  botonBuscarGF = false;
  vistaFormProcesos=false
  vistaIconoProcesos=false
  vistaRadio=false
  public show: boolean = false;
  dataSource = ELEMENT_DATA;
  dataSourceRequisitos = ELEMENT_DATA_REQUISITOS;
  displayedColumns = ['entidad', 'tupa','procedimiento','tipo de documento', 'acciones'];

  constructor(private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  showToasterSuccess() {
    this.notifyService.showSuccess("Su configuración se ha guardado exitosamente.", "Exito!")
 

  }

  desplegarComponente(valor: string) {

    if (valor == "2") {
      this.show = true;
    } else if (valor == "1") {
      this.show = false;
    }
}

mostrarContenidoDocResolutivo() {
  this.vistaFormProcesos = true;
}

mostrarIconoDocResol() {
  this.vistaIconoProcesos = true;
}


mostrarRadioDocResol(valor: string) {

  if (valor == "1") {
    this.vistaRadio = true;
  } else if (valor == "2") {
    this.vistaRadio = false;
  }
}
}

export interface ProductosElement {
  entidad: string;
  tupa: string;
  procedimiento: string;
  tipoDocumento: string;
  acciones: string;

}

export interface Requisitos {
  obligatorio: string;
  descripcion: string;
  nAdjuntos: number;
  acciones: string;

}

const ELEMENT_DATA: ProductosElement[] = [
  { entidad: 'entidad', tupa: 'tupa', procedimiento:'procedimiento', tipoDocumento:'tipo de documento',acciones: ''},
  { entidad: 'entidad', tupa: 'tupa', procedimiento:'procedimiento', tipoDocumento:'tipo de documento', acciones: ''},
  { entidad: 'entidad', tupa: 'tupa', procedimiento:'procedimiento', tipoDocumento:'tipo de documento', acciones: ''},
  { entidad: 'entidad', tupa: 'tupa', procedimiento:'procedimiento', tipoDocumento:'tipo de documento', acciones: ''},
  { entidad: 'entidad', tupa: 'tupa', procedimiento:'procedimiento', tipoDocumento:'tipo de documento', acciones: ''},
  { entidad: 'entidad', tupa: 'tupa', procedimiento:'procedimiento', tipoDocumento:'tipo de documento', acciones: ''},
];

const ELEMENT_DATA_REQUISITOS: Requisitos[] = [
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },

]