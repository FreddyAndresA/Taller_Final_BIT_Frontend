
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarPeliculasService {

  //private API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/all/day?api_key=4451b033108a4d0d8d399e31162249a0'
  private API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/all/day?api_key=4451b033108a4d0d8d399e31162249a0&language=es&region=co'

  constructor( private http: HttpClient ) { }

  getTrendingMovies():Observable<any> {
      return this.http.get(this.API_URL_TRENDING)
  }
  
}

