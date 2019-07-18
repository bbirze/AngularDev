import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from '../logger.service';

export class Film {
    constructor(
        public id: number,
        public title: string,
        public blurb: string,
        public price: number,
        public score: number,
        public genres: Array<string>) {
    }
}

@Injectable()
export class FilmService {

    constructor(private httpClient:HttpClient,
                private log: LoggerService ) { }
 
    getFilms(): Observable<Film[]> {
        this.log.log('FilmService', `returning a collection of films`)
        return this.httpClient.get<Film[]>('/assets/film-list.json') 
    }
}
