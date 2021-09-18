import { Component, OnInit } from '@angular/core';
import { CarteleraResponse, Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from "./../../services/peliculas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getImages(path:string)
  {
    return `https://image.tmdb.org/t/p/w500/${path}`;
  }

  cartelera: CarteleraResponse;
  movies: Movie[];
  constructor(private peliculasService:PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getMovies().subscribe((data:any)=>{
      console.log(data);
      this.cartelera = data;
      this.movies=data.results;
      console.log(this.movies)

    });
  }

}
