import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog'
import { DocumentosDigitalizadosComponent } from './documentos-digitalizados/documentos-digitalizados.component';
@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  
  vistaFormProcesos=false
  dataSource = ELEMENT_DATA;
  displayedColumns = ['entidad', 'tupa','procedimiento', 'acciones'];

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog():void{
    const dialogRef = this.dialog.open(DocumentosDigitalizadosComponent, {
      width:'350px',
      data: 'are yot sure?'
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if(res){
        console.log("Delet file");
      }
    })
  }

  ngOnInit(): void {
  }

}

export interface DocumentosElement {
  entidad: string;
  tupa: string;
  procedimiento: string;
  acciones: string;

}

const ELEMENT_DATA: DocumentosElement[] = [
  { entidad: 'entidad', tupa: 'tupa', procedimiento: 'procedimiento', acciones: ''},
  { entidad: 'entidad', tupa: 'tupa', procedimiento: 'procedimiento', acciones: ''},
  { entidad: 'entidad', tupa: 'tupa', procedimiento: 'procedimiento', acciones: ''},
];

