import { Component } from '@angular/core';
import { Film, FilmService } from './common/film-service/film-service';
import { LoggerService } from './common/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab5-components';
  films: Film[] = [];

  constructor(private fs : FilmService,
              private log: LoggerService)  {
    fs.getFilms().subscribe(response =>  {
      this.films = response;
    });
    this.log.log('AppComponent', 'got a collection of films to display')
  }
}
