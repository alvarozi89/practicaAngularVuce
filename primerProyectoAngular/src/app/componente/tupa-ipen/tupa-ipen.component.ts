import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from 'dynamic-form/src/lib/dynamic-form.component'
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/notification.service';

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
  id=null;
  title = 'formsTest';
  panelOpenState = false;
  public formData: JsonFormData;
  public formDataDetalle: JsonFormData;
  public formDataDetalleSerfor: JsonFormData;
  public formDataDocumento: JsonFormData;
  displayedColumnsBusqueda: string[] = ['producto', 'seccion'];
  clickedRows = new Set<TablaBusqueda>();
  displayedColumns = ['fechaRegistro', 'etapa', 'descripcion', 'fechaEstimada', ];
  dataSource = ELEMENT_DATA;
  dataSourceRequisitos = ELEMENT_DATA_REQUISITOS;
  dataSourceBusquedaTabla= ELEMENT_DATA_BUSQUEDA;

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

  guardarProducto(){

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

const ELEMENT_DATA: PeriodicElement[] = [
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


