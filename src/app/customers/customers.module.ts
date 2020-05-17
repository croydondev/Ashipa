import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { LoginComponent } from './login/login.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { BillComponent } from './bill/bill.component';
import { PropertiesComponent } from './properties/properties.component';
import { GenerationComponent } from './generation/generation.component';
import { MainComponent } from './main/main.component';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';

import { ChartModule } from 'angular2-chartjs';
import { HighchartsChartModule } from 'highcharts-angular';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';

//import { ChartModule } from 'angular-highcharts';

@NgModule({
    imports: [ 
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        SharedModule, 
        CustomersRoutingModule, 
        ChartModule, 
        HighchartsChartModule,
        NgbModule
     ],
    declarations: [ CustomersListComponent, FilterTextboxComponent,
                    CustomersComponent,
                    LoginComponent,
                    ConsumptionComponent,
                    BillComponent,
                    PropertiesComponent,
                    GenerationComponent,
                    MainComponent,
                    DayComponent,
                    MonthComponent,
                    YearComponent,
                    RegisterComponent]
})
export class CustomersModule { }
