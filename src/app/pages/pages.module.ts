import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HomeComponent, 
    PeliculaComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ],
  exports:[ 
    CommonModule 
  ]
})
export class PagesModule { }
