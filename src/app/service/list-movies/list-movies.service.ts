import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieModel, SearchMovieModel } from "src/app/model/movie.model";
import { ListMoviesRepository } from "src/app/repository/list-movies/list-movies.repository";

@Injectable({
    providedIn: 'root',
})

export class ListMoviesService {
  constructor(private productRepository: ListMoviesRepository) {}

  public getListMovies(): Observable<MovieModel> {
    return this.productRepository.getMovies();
  }

  public getSearchMovie(query: string): Observable<SearchMovieModel> {
    return this.productRepository.searchMovie(query);
  }
}