import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from 'dynamic-form/src/lib/dynamic-form.component'

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
  title = 'formsTest';

  options: FixedOptions[] = [
    {value: 'producto-0', viewValue: 'Producto 1'},
    {value: 'producto-1', viewValue: 'Producto 2'},
    {value: 'producto-2', viewValue: 'Producto 3'},
  ];

  public formData: JsonFormData;

  constructor(private http: HttpClient) {
    this.formData = {controls:[]};
  }


  ngOnInit(): void {  this.http
    .get('/assets/my-form-rl.json')
    .subscribe((formData: any) => {
      this.formData = formData;
    });
  }

}
