import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';



@NgModule({
  declarations: [
    HomeComponent, 
    PeliculaComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
