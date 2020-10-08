import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieData
  searchValue=""
  faSearch = faSearch
  searchResult=[]
  movies
  constructor(private dataService: DataServiceService, private route:Router) { }

  ngOnInit() {
     this.dataService.getMovies().subscribe(k=>{
        this.movies=k
        this.movieData=k
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

  navigateProduct(x){
    this.route.navigate(["movie"],{queryParams:{id:x}})
  }
}
