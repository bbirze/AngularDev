import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film-service/film-service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film : Film
  imageURL: string;

  constructor() { }

  ngOnInit() {
    this.imageURL = `../../assets/images/${this.film.id}.jpg`;
  }

}
