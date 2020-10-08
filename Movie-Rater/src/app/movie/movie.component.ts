import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie:any={}
  productionCompany=[]
  genres=[]
  languages = []
  comments=""
  param:any={}
  constructor(private dataService: DataServiceService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.param=params
     this.dataService.getMovieById(params.id).subscribe(k=>{
      this.movie=k[0]
      this.productionCompany=JSON.parse(this.movie.production_companies.replace(/'/g, '"'))
      this.genres = JSON.parse(this.movie.genres.replace(/'/g, '"'))
      this.languages = JSON.parse(this.movie.spoken_languages.replace(/'/g, '"'))
      })
      
    })
  }

  onSubmit(){
    this.movie.comments.push(this.comments)
    this.dataService.addComments(this.movie).subscribe(()=>{
      this.dataService.getMovieById(this.param.id).subscribe((k)=>{
        this.movie=k[0]
        this.productionCompany=JSON.parse(this.movie.production_companies.replace(/'/g, '"'))
      this.genres = JSON.parse(this.movie.genres.replace(/'/g, '"'))
      this.languages = JSON.parse(this.movie.spoken_languages.replace(/'/g, '"'))
      })
    })
  }

}
