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
  films: Array<Film>;

  constructor(private fs : FilmService,
              private log: LoggerService)  {
    this.films = fs.getFilms();
    this.log.log('AppComponent', 'got a collection of films to display')
  }
}
