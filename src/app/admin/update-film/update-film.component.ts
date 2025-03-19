import { Component, OnInit } from '@angular/core';
import { FilmsService } from "../../services/films.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-film',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {
  nomFilm: string = '';
  descFilm: string = '';
  errorMessage: string = ''; // To hold any potential error message

  constructor(
    private filmsService: FilmsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // Convert to number
    const film = this.filmsService.getFilmById(id);  // Get the film data by ID
    if (film) {
      // Use empty string as fallback for undefined values
      this.nomFilm = film.nom || '';
      this.descFilm = film.description || '';
    } else {
      this.errorMessage = 'Film not found'; // Handle error if film not found
    }
  }

  update(desc: string, name: string): void {
    const id = +this.route.snapshot.params['id'];  // Get the ID
    const success = this.filmsService.updateFilmById(id, desc, name);  // Update the film using the service

    // success will be a boolean now, not void
    if (success) {
      this.router.navigate(['admin/liste-films']);  // Navigate back after successful update
    } else {
      this.errorMessage = 'Update failed. Please try again later.';  // Show an error message if update fails
    }
  }
}
