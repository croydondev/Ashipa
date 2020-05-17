import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsListComponent } from './operators-list/operators-list.component';
import { OperatorsComponent } from './operators/operators.component';
import { OperatorsRoutingModule } from './operators-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { ChartModule } from 'angular2-chartjs';
import { HighchartsChartModule } from 'highcharts-angular';

import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [OperatorsListComponent, OperatorsComponent, LoginComponent, MainComponent, RegisterComponent],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    ChartModule,
    HighchartsChartModule
  ]
})
export class OperatorsModule { }
