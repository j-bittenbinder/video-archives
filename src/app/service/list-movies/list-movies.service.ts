import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieModel, SearchMovieModel } from "src/app/model/movie.model";
import { ListMoviesRepository } from "src/app/repository/list-movies/list-movies.repository";

@Injectable({
    providedIn: 'root',
})

export class ListMoviesService {
  constructor(private listMoviesRepository: ListMoviesRepository) {}

  public getListMovies(): Observable<MovieModel> {
    return this.listMoviesRepository.getMovies();
  }

  public getSearchMovie(query: string): Observable<SearchMovieModel> {
    return this.listMoviesRepository.searchMovie(query);
  }
}