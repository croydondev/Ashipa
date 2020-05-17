import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ChartModule } from 'angular2-chartjs';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ChartModule,
    HighchartsChartModule
  ]
})
export class LandingModule { }
