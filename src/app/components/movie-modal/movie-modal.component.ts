import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})

export class MovieModalComponent implements OnInit {
  @Input() public movie = new MovieModel();

  constructor() { }

  public ngOnInit(): void {}

  public hasPoster(): boolean {
    if (this.movie.poster_path)
    return true

    return false
  }
}
