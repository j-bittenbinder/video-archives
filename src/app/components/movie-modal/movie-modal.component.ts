import { Component, Input, OnInit } from '@angular/core';
import { MovieModel, SearchMovieModel } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})

export class MovieModalComponent implements OnInit {
  @Input() 
  public movie!: MovieModel;

  constructor() { }

  public ngOnInit(): void {
    console.log(this.movie);
  }

}
