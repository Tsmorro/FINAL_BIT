import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { ChartModule} from '@bit/primefaces.primeng.chart';
import {TreeTableModule} from '@bit/primefaces.primeng.treetable';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import {createCustomElement} from '@angular/elements';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    TreeTableModule,
    MaterialModule,
    HttpClientModule
  ],
})
export class DashboardModule { 
 
}

