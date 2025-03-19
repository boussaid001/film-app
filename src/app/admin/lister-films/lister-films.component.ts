import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { Film } from '../../shared/models/film';
import { FilmsService } from '../../services/films.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-films',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    
  ],
  templateUrl: './lister-films.component.html',
  styleUrls: ['./lister-films.component.css']
})
export class ListerFilmsComponent implements OnInit {

  tabFilms: Film[] = [];

  constructor(private filmsService: FilmsService, private router: Router) {}

  ngOnInit(): void {
    this.chargerFilms();
  }

  /** Charge la liste des films */
  chargerFilms(): void {
    this.tabFilms = this.filmsService.getFilms(); // Assuming it returns an array
  }

  /** Supprime un film après confirmation */
  confirmAndDelete(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.supprimerFilm(id);
        Swal.fire(
          'Supprimé!',
          'Le film a été supprimé avec succès.',
          'success'
        );
      }
    });
  }

  /** Supprime un film de la liste et met à jour l'affichage */
  supprimerFilm(id: number): void {
    this.filmsService.deleteFilm(id);  // Assuming this method is working properly
    this.chargerFilms(); // Reload the film list after deletion
  }

  /** Navigate to the film details page */
  goToFilm(filmId: number): void {
    this.router.navigate(['/admin/voir', filmId]); // Correctly passing the filmId to the route
  }

  /** Navigate to the edit film page */
  editFilm(filmId: number): void {
    this.router.navigate(['/admin/update', filmId]); // Updated to match the route definition in admin-routing.module.ts
  }
}
