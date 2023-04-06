import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private ApiURL="http://localhost:8088/";
  constructor(private httpClient: HttpClient) { }
  getMovielist():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.ApiURL+'Movies'}`);
  }

  getMoviebyid(id:number):Observable<Movie>
  {
return this.httpClient.get<Movie>(`${this.ApiURL}`+'Movie'+`/${id}`);
  }

  deleteMovie(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.ApiURL}`+'delete'+`/${id}`);
  }

}
