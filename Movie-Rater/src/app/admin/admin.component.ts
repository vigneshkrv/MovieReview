import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  movieData
  searchValue=""
  faSearch = faSearch
  constructor(private dataService: DataServiceService, private route:Router) { }

  ngOnInit() {
     this.dataService.getMovies().subscribe(k=>{
        this.movieData=k
    })
  }
  editMovie(x){
    this.route.navigate(["createMovie"],{queryParams:{id:x}})
  }

  deleteMovie(movie) {
    this.dataService.deleteMovie(movie).subscribe(()=>{
      this.dataService.getMovies().subscribe(k=>{
        this.movieData=k
    })
    })
  }

  changeInput(){

  }

  searchMovies() {

  }

  createMovies() {
    this.route.navigateByUrl("createMovie")
  }

  navigateProduct(x){
    this.route.navigate(["movie"],{queryParams:{id:x}})
  }
}
