import { Component, OnInit } from '@angular/core';
import { ListarPeliculasService } from 'src/app/services/listar-peliculas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  movies:any[] = []
  imageUrl = 'https://image.tmdb.org/t/p/w500/'

  constructor( private trendingMovies:ListarPeliculasService ) { }

  /* renderTrendingMovies(){
    this.trendingMovies.getTrendingMovies().subscribe(results => {
      console.log(results); 
    })
  } */

  /* ngOnInit(): void {
    this.trendingMovies.getTrendingMovies().subscribe(results => {
      this.movies = results.results;
      console.log(this.movies);
    })
  } */

  ngOnInit(): void {
    this.trendingMovies.getProviders().subscribe(results => {
      this.movies = results.results;
    })
  }

}
