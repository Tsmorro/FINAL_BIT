import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';


import {createCustomElement} from '@angular/elements';
import { DashboardComponent } from './components/components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent,DashboardComponent]
})
export class AppModule { 
  constructor(private injector: Injector){
    const element = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('App', element);
    const dashboard = createCustomElement(DashboardComponent, {injector: this.injector});
    customElements.define('Dashboard', dashboard);
  }
    NgDoBootstrap(){};

}

