import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { ListMoviesRepository } from './repository/list-movies/list-movies.repository';
import { ListMoviesService } from './service/list-movies/list-movies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ ListMoviesRepository, ListMoviesService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
