import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const route: Routes = [
  { path:"home", component:HomeComponent },
  { path:"pelicula", component:PeliculaComponent  },
  { path:"**", pathMatch:"full", component:HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
exports:[
  RouterModule
]
})
export class PagesRoutingModule { }
