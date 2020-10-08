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
  constructor(private dataService: DataServiceService, private route:Router) { }

  ngOnInit() {
     this.dataService.getMovies().subscribe(k=>{
        this.movieData=k
    })
  }

  changeInput(){

  }

  searchMovies() {

  }

  navigateProduct(x){
    this.route.navigate(["movie"],{queryParams:{id:x}})
  }
}
