import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
              
//import FormsModule  to use ngModel for 2-way data-binding.
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
