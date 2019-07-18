import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { FooterComponent } from './footer/footer.component';
import { FilmService } from './common/film-service/film-service';

@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    FooterComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
