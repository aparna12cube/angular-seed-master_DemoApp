import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { FusionRoutingModule}  from './fusion-routing.module';

@NgModule({
  imports: [FusionRoutingModule, CommonModule],
  declarations: [PatientComponent],
  exports: [PatientComponent]
})
export class PatientModule { }
