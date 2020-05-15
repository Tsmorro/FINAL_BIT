import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartModule} from '@bit/primefaces.primeng.chart';
import {TreeTableModule} from '@bit/primefaces.primeng.treetable';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    TreeTableModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
//   constructor(private injector: Injector){};
//   NgDoBootstrap(){
//   const element = createCustomElement(AppComponent, {injector: this.injector});
//   customElements.define('App', element);
// }
  }

