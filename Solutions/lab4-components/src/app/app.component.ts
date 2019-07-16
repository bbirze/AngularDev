import { Component } from '@angular/core';
import { Film, FilmService } from './film-service/film-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab5-components';
  films: Array<Film>;

  constructor(private fs : FilmService)  {
    this.films = fs.getFilms();
  }


}
