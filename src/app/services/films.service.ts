import { Injectable } from '@angular/core';
import { Film } from '../shared/models/film';
import { FILMS } from '../shared/models/des-films';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  films: Film[] = FILMS;

  constructor() {}

  // Method to get the films in reverse order
  getFilms(): Film[] {
    return this.films.slice().reverse();  // Creates a shallow copy and reverses it
  }

  deleteFilm(index: number) {
    this.films.splice(index, 1);
  }

  AjouterFilm(nom: string, desc: string) {
    let id: number;

    if (this.films.length === 0) {
      id = 1;
    } else {
      id = Number(this.films[this.films.length - 1].id) + 1;
    }

    let f = new Film();
    f.id = id.toString();
    f.nom = nom;  // Assuming `Film` has a `nom` property
    f.description = desc;
    f.descVisible = true;

    this.films.push(f);  // Proper way to add an item to an array
  }
}
