import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  key="5181f53a6aaf99b3c49ab136a403119a";
  constructor( private http:HttpClient ) {    
   }

   getMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ this.key }&language=es-mxs&page=1`);
   }
}
