import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../common/film-service/film-service';
import { LoggerService } from '../common/logger.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film : Film
  imageURL: string;

  constructor(private log: LoggerService) { }

  ngOnInit() {
    this.imageURL = `../../assets/images/${this.film.id}.jpg`;
    this.log.log('FilmItemComponent', `\tAdded file ${this.film.title} with image: ${this.imageURL}`)
  }
}
