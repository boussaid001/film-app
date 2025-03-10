import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-ajouter-film',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-film.component.html',
  styleUrl: './ajouter-film.component.css',
})
export class AjouterFilmComponent {
  // Declare the properties to hold the input values
  nomFilm: string = '';  // Initialize with an empty string
  descFilm: string = ''; // Initialize with an empty string

  constructor(
    private filmsService: FilmsService,
    private router: Router
  ) {}

  // Method that gets called when the "Ajouter" button is clicked
  AjouterFilm(nom: string, desc: string) {
    if (nom && desc) {
      this.filmsService.AjouterFilm(nom, desc);  // Call the service to add the film

      // Show SweetAlert for success
      Swal.fire({
        icon: 'success',
        title: 'Film ajouté avec succès!',
        showConfirmButton: false,
        timer: 1500,
      });

      this.router.navigate(['admin/liste-films']);  // Redirect after adding the film
    } else {
      // Show SweetAlert for error
      Swal.fire({
        icon: 'error',
        title: 'Veuillez remplir les champs nom et description!',
        showConfirmButton: true,
      });
    }
  }
}
