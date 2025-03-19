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
    return this.films.slice().reverse();
  }

  getFilmById(id: number): Film | undefined {
    return this.films.find(film => film.id !== undefined && +film.id === id);
  }

  updateFilmById(id: number, desc: string, name: string): boolean {
    const film = this.getFilmById(id);
    if (film) {
      film.description = desc;
      film.nom = name;
      return true;
    }
    return false;
  }

  AjouterFilm(nom: string, desc: string): void {
    const maxId = Math.max(...this.films.map(film => film.id ? +film.id : 0));
    const newId = (maxId + 1).toString();
    
    const newFilm: Film = new Film({
      id: newId,
      nom: nom,
      description: desc,
      descVisible: false
    });
    
    this.films.unshift(newFilm);
  }

  deleteFilm(id: number): void {
    const index = this.films.findIndex(film => film.id !== undefined && +film.id === id);
    if (index !== -1) {
      this.films.splice(index, 1);
    }
  }
}
