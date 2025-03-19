import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import {ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-details-film',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {
  nomFilm: string = '';
  descFilm: string = '';
  errorMessage: string = ''; // to hold the error message if film not found

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'] - 1; // Access route param and convert to number
    const film = this.filmsService.getFilmById(id);  // Get the film by ID

    if (film) { // Check if film exists
      this.nomFilm = film.nom || ''; // Assign film's name, or empty string if undefined
      this.descFilm = film.description || ''; // Assign film's description, or empty string if undefined
    } else {
      // Handle case if film with that ID doesn't exist
      this.errorMessage = 'Film not found';
      this.nomFilm = '';  // Clear previous value
      this.descFilm = '';  // Clear previous value
    }
  }
}
