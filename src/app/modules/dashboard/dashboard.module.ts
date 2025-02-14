import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './pages/dashboard.component';



@NgModule({
  declarations: [HomeComponent, DashboardComponent,],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class DashboardModule { }
