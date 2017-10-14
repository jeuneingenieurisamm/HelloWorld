// The root module of the app

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-comp.component';

@NgModule({
  // Every component under this module should be mentioned in the declarations array
  // For now we only have two components
  declarations: [
    AppComponent,
    FirstComponent
  ],
  // Every external or feature module should be mentioned in the imports array
  // BrowserModule is imported by default
  // We added Forms module in order to use its directive ngModel later in the two way data binding
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
