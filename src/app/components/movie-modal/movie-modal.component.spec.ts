import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieModel } from 'src/app/model/movie.model';

import { MovieModalComponent } from './movie-modal.component';

describe('MovieModalComponent', () => {
  let component: MovieModalComponent;
  let fixture: ComponentFixture<MovieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieModalComponent);
    component = fixture.componentInstance;
    component.movie = new MovieModel();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return poster_path', () => {
    component.movie.poster_path = 'url_poster'
    component.hasPoster();
    expect(component.hasPoster()).toBeTruthy();
  });
});
