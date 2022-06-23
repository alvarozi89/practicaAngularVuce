import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/notification.service';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-documentos-digitalizados',
  templateUrl: './documentos-digitalizados.component.html',
  styleUrls: ['./documentos-digitalizados.component.css']
})

export class DocumentosDigitalizadosComponent implements OnInit {

  opciones : string [] = [ 'Botas' , 'Zuecos' , 'Mocasines' , 'Mocasines' , 'Zapatillas deportivas' ];

  constructor(
    public dialogRef: MatDialogRef<DocumentosDigitalizadosComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string, private notifyService: NotificationService ) { }

    onClickNO(){
      this.dialogRef.close();
    }

    showToasterSuccess() {
      this.notifyService.showSuccess("Su configuracion se ha guardado exitosamente!", "Exito!");
  
    }

  ngOnInit(): void {
    
  }

}
