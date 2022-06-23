
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarPeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas(parametros:any):Observable<any> {
    const URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=4451b033108a4d0d8d399e31162249a0'
    
    return this.http.get(URL)
  }
}

