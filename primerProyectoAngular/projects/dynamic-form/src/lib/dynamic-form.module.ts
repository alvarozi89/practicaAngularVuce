import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialAllModule } from '../material.module';
import { DynamicFormComponent } from './dynamic-form.component';



@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    MaterialAllModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
