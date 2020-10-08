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
  searchResult=[]
  movies
  constructor(private dataService: DataServiceService, private route:Router) { }

  ngOnInit() {
     this.dataService.getMovies().subscribe(k=>{
        this.movieData=k
        this.movies=k
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

  searchMovies(){
    if(this.searchValue!="")
      {
      this.searchResult=this.movieData.filter((x)=>{
        if(x)
        {
          var temp= x.original_title.toLowerCase()
          return temp.includes(this.searchValue.toLowerCase())
        }
       
      })
      
      this.movies = this.searchResult
    }
  }

  changeInput() {
    if(this.searchValue=="")
    {
      this.movies = this.movieData 
    }
  }


  createMovies() {
    this.route.navigateByUrl("createMovie")
  }

  navigateProduct(x){
    this.route.navigate(["movie"],{queryParams:{id:x}})
  }
}
