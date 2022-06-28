import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/notification.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-documentos-digitalizados',
  templateUrl: './documentos-digitalizados.component.html',
  styleUrls: ['./documentos-digitalizados.component.css']
})

export class DocumentosDigitalizadosComponent implements OnInit {

  toppings = this._formBuilder.group({
    opcion1: false,
    opcion2: false,
    opcion3: false,
    opcion4: false,
    opcion5: false,
  });

  constructor(
    public dialogRef: MatDialogRef<DocumentosDigitalizadosComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string, private notifyService: NotificationService, private _formBuilder: FormBuilder ) { }

    onClickNO(){
      this.dialogRef.close();
    }

    showToasterSuccess() {
      this.notifyService.showSuccess("Su configuracion se ha guardado exitosamente!", "Exito!");
  
    }

  ngOnInit(): void {
    
  }

}
