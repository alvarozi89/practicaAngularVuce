import { Component, OnInit, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from 'dynamic-form/src/lib/dynamic-form.component';
import { NotificationService } from 'src/app/notification.service';
import {MatTable} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';

interface FixedOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tupa-ipen',
  templateUrl: './tupa-ipen.component.html',
  styleUrls: ['./tupa-ipen.component.css']
})

export class TupaIpenComponent implements OnInit {
  botonDescargarAdjuntos = false;
  checked = false;
  vistaFormDocumento= false;
  vistaBusqueda= false;
  indeterminate = true;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  disabledButton = true;
  disabledRegistroTramite = true;
  id="";
  modal=false;
  idSubpartida="Productos del reino vegetal 5"
  tipoProductoform="EQUIPO GENERADORES";
  partidaArancelariaform="prueba1producto";
  title = 'formsTest';
  panelOpenState = false;
  public formData: JsonFormData;
  public formDataDetalle: JsonFormData;
  public formDataDetalleSerfor: JsonFormData;
  public formDataDocumento: JsonFormData;
  displayedColumnsBusqueda: string[] = ['producto', 'seccion'];
  clickedRows = new Set<TablaBusqueda>();
  displayedColumns = ['fechaRegistro', 'etapa', 'descripcion', 'fechaEstimada', ];
  displayedColumnsProducto: string[]= ['tipoProducto', 'partidaArancelaria', 'subpartida' ];
  
  dataSourceTrazabilidad = ELEMENT_DATA_TRAZABILIDAD;
  dataSourceRequisitos = ELEMENT_DATA_REQUISITOS;
  dataSourceBusquedaTabla= ELEMENT_DATA_BUSQUEDA;
  ELEMENT_DATA_PRODUCTO: producto[] = [
    { tipoProducto: "EQUIPO GENERADORES", partidaArancelaria: "prueba1producto", subpartida: "Productos del reino vegetal 5"},
   
  ];
  dataToDisplay = [...this.ELEMENT_DATA_PRODUCTO];
  dataSourceProducto = new ExampleDataSource(this.dataToDisplay)

  constructor(private http: HttpClient, private notifyService: NotificationService) {
    this.formData = { controls: [] };
    this.formDataDetalle = { controls: [] };
    this.formDataDetalleSerfor = { controls: [] };
    this.formDataDocumento = { controls: [] };
  }


  ngOnInit(): void {
    this.http
    .get('/assets/my-form-rl.json')
    .subscribe((formData: any) => {
      this.formData = formData;
    });
    this.http
      .get('/assets/my-form-detalle.json')
      .subscribe((formDataDetalle: any) => {
        this.formDataDetalle = formDataDetalle;
      });
    this.http
      .get('/assets/my-form-detalle-serfor.json')
      .subscribe((formDataDetalleSerfor: any) => {
        this.formDataDetalleSerfor = formDataDetalleSerfor;
      });
    this.http
      .get('/assets/my-form-documento.json')
      .subscribe((formDataElmento: any) => {
        this.formDataDocumento = formDataElmento;
      });
  }

  habilitarBoton() {
    this.disabledButton = !this.disabledButton;

  }

  habilitarRegistroTramite() {
    this.disabledRegistroTramite = !this.disabledRegistroTramite;

  }

  mostrarFormProducto() {
    this.vistaFormDocumento = true;

  }

  cargarSubpartidaNacional() {

  }

  showToasterSuccess() {
    this.notifyService.showSuccess("Se cargaron los archivos exitosamente!", "Exito!")
    this.botonDescargarAdjuntos = true

  }
  mostrarBusquedaSubpartida(){
    this.vistaBusqueda=true;
   
  }

  clicked(row: any){
    this.id=row.producto;
    this.cerrarBusqueda();
  }
  cerrarBusqueda(){
    this.vistaBusqueda=false;
  }

  abrirModal(){
    this.modal=true;
  }


  finalizarModal() {
    this.notifyService.showSuccess("Se creo la solicitud exitosamente!", "Exito!")
    this.botonDescargarAdjuntos = true

  }

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;
  guardarProducto(formDocumento:JsonFormData){
  this.tipoProductoform="EQUIPO GENERADORES";
  this.idSubpartida=this.id;
  this.partidaArancelariaform="prueba1producto";
  const randomElementIndex = Math.floor(Math.random() * this.ELEMENT_DATA_PRODUCTO.length);
    this.dataToDisplay = [...this.dataToDisplay, this.ELEMENT_DATA_PRODUCTO[randomElementIndex]];
    this.dataSourceProducto.setData(this.dataToDisplay);
  this.vistaFormDocumento=false;
    
  }
  
}
export interface TablaBusqueda {
  seccion: string;
  producto: string;
  
}
export interface PeriodicElement {
  fechaRegistro: Date;
  etapa: string;
  descripcion: string;
  fechaEstimada: Date;
  responsable: string;

}

export interface Requisitos {
  obligatorio: string;
  descripcion: string;
  nAdjuntos: number;
  acciones: string;

}

export interface producto {
  tipoProducto: string;
  partidaArancelaria: string;
  subpartida: string;
  
}


const ELEMENT_DATA_TRAZABILIDAD: PeriodicElement[] = [
  { fechaRegistro: new Date('dd/mm/yyyy'), etapa: 'prueba', descripcion: 'descripcion', fechaEstimada: new Date('dd/mm/yyyy'), responsable: 'responsable' },
  { fechaRegistro: new Date('dd/mm/yyyy'), etapa: 'prueba', descripcion: 'descripcion', fechaEstimada: new Date('dd/mm/yyyy'), responsable: 'responsable' },
  { fechaRegistro: new Date('dd/mm/yyyy'), etapa: 'prueba', descripcion: 'descripcion', fechaEstimada: new Date('dd/mm/yyyy'), responsable: 'responsable' },
];

const ELEMENT_DATA_REQUISITOS: Requisitos[] = [
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },
  { obligatorio: 'prueba', descripcion: 'descripcion', nAdjuntos: 1, acciones: '' },

]

const ELEMENT_DATA_BUSQUEDA: TablaBusqueda[] = [
  {producto: "Productos del reino vegetal", seccion: 'SECCIÓN (01 05)'},
  {producto: "Productos del reino vegetal 2", seccion: 'SECCIÓN (01 05)'},
  {producto: "Productos del reino vegetal 3", seccion: 'SECCIÓN (01 05)'},
  {producto: "Productos del reino vegetal 4", seccion: 'SECCIÓN (01 05)'},
  {producto: "Productos del reino vegetal 5", seccion: 'SECCIÓN (01 05)'},
  {producto: "Productos del reino vegetal 6", seccion: 'SECCIÓN (01 05)'},
 
];

class ExampleDataSource extends DataSource<producto> {
  private _dataStream = new ReplaySubject<producto[]>();

  constructor(initialData: producto[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<producto[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: producto[]) {
    this._dataStream.next(data);
  }
}

