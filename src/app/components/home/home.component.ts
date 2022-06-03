import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { MovieModel, SearchMovieModel } from 'src/app/model/movie.model';
import { ListMoviesService } from 'src/app/service/list-movies/list-movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movieDetails!: MovieModel;
  public search!: SearchMovieModel;

  constructor(
    public listMoviesService: ListMoviesService,
  ) { }

  public ngOnInit(): void {}

  public onSubmit(formSearch: NgForm) {
    if (formSearch.value.first) {
      this.listMoviesService.getSearchMovie(formSearch.value.first)
      .pipe(first())
      .subscribe((result: SearchMovieModel) => {
        this.search = result;
      });
    } else {
      this.search.results = [];
    }
  }

  public viewDetails(index: number): void {
    this.movieDetails = this.search.results[index];
  }

  public noResults(): boolean {
    return this.search.total_results === 0;
  }
}
