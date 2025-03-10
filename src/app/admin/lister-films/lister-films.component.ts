import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from "@angular/common";
import Swal from 'sweetalert2';
import { Film } from "../../shared/models/film";
import { FilmsService } from "../../services/films.service";

@Component({
  selector: 'app-lister-films',
  standalone: true,
  imports: [
    CommonModule,
    NgFor
  ],
  templateUrl: './lister-films.component.html',
  styleUrls: ['./lister-films.component.css'] // Correction ici
})
export class ListerFilmsComponent implements OnInit {

  tabFilms: Film[] = [];

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.chargerFilms();
  }

  /** Charge la liste des films */
  chargerFilms(): void {
    this.tabFilms = this.filmsService.getFilms();
  }

  /** Supprime un film après confirmation */
  confirmAndDelete(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Cette action est irréversible!",
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
    this.filmsService.deleteFilm(id);
    this.chargerFilms(); // Recharge la liste après suppression
  }
}
