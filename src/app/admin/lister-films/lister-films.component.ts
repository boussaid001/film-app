import { Component } from '@angular/core';
import {Film} from "../../shared/models/film";
import {FilmsService} from "../../services/films.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-lister-films',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lister-films.component.html',
  styleUrl: './lister-films.component.css'
})
export class ListerFilmsComponent {

  tabFilms :Film[] = [];
  constructor( private filmsService: FilmsService ) {
  }
  ngOnInit(): void {
    this.tabFilms = this.filmsService.getFilms();

  }
  supprimer(id : number){
    this.filmsService.deleteFilm(id)
  }

  confirmAndDelete(id: number){
    if (confirm("Are you sure you want to delete this film?")){
      this.filmsService.deleteFilm(id)
    }
  }
}
