import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';
import {DetailsFilmComponent} from "./details-film/details-film.component";
import {UpdateFilmComponent} from "./update-film/update-film.component";

const routes: Routes = [{ path: '', component: AdminComponent,
  children: [

    {path: 'liste-films', component: ListerFilmsComponent },
    {path: 'ajouter-film', component: AjouterFilmComponent  },
    {path: 'voir/:id', component: DetailsFilmComponent  },
    {path: 'update/:id', component: UpdateFilmComponent  },


  ] ,
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
