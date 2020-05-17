import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';
import { LandingModule } from './landing/landing.module';
import { OperatorsModule } from './operators/operators.module';
import { HighchartsChartModule } from 'highcharts-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports:      [
    BrowserModule,
    CoreModule,
    CustomersModule,
    OrdersModule,
    AppRoutingModule,
    LandingModule,
    OperatorsModule,
    HighchartsChartModule,
    NgbModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
