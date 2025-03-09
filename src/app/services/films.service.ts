import { Injectable } from '@angular/core';
import { Film } from '../shared/models/film';
import { FILMS } from '../shared/models/des-films';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  films: Film[] = FILMS;

  constructor() {}

  getFilms(): Film[] {
    return this.films;
  }


  deleteFilm(index : number){
    this.films.splice(index, 1);
  }
}
