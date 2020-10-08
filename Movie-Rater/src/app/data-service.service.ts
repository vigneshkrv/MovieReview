import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import movies from '../assets/SelectedMovies.json'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  rootURL = "http://localhost:8080/api"
  constructor(private http:HttpClient) {
    
   }

  getMovies() {
    return this.http.get(this.rootURL+"/getMovies")
  }

  getMovieById(x)
  {
    return this.http.get(this.rootURL+`/getMovieById?id=${x}`)
  }

  addComments(x) {
    return this.http.post(this.rootURL+"/addComments",x)
  }

  createMovie(x) {
    return this.http.post(this.rootURL+"/createMovie",x)
  }

  updateMovie(x) {
    return this.http.post(this.rootURL+"/updateMovie",x)
  }

  deleteMovie(x) {
    return this.http.post(this.rootURL+"/deleteMovie",x)
  }
}
