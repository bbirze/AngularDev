import { Component, OnInit } from '@angular/core';
import { Film, FilmService } from '../film-service/film-service';
import { LoggerService } from '../common/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  films: Array<Film>;

  constructor(private fs : FilmService,
              private log: LoggerService) {
    this.films = fs.getFilms();
    this.log.log('HomeComponent', 'got a collection of films to display')
  }

  ngOnInit() {
  }

}
