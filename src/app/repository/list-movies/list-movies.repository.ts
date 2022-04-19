import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieModel, SearchMovieModel } from "src/app/model/movie.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})

export class ListMoviesRepository {
  constructor(private httpClient: HttpClient) {}

  public getMovies(): Observable<MovieModel> {
    const listId = 1;

    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json;charset=utf-8')
      .set('Authorization', 'Bearer ' + environment.token);

    const path: HttpParams = new HttpParams()
      .set('page', 2)
      .set('api_key', environment.apiKey)

    return this.httpClient
      .get<MovieModel>(
        environment.url + 
        "4/list/" + listId,
        { headers: headers, params: path }
      );
  }

  public searchMovie(query: string): Observable<SearchMovieModel> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json;charset=utf-8')
      .set('Authorization', 'Bearer ' + environment.token);

    const path: HttpParams = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('query', query)

    return this.httpClient
      .get<SearchMovieModel>(
        environment.url + 
        "3/search/movie",
        { headers: headers, params: path }
      );
  }
}