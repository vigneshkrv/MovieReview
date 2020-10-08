import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  movieModel:any={}
  param:any={}
  constructor(private dataservice: DataServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params.id)
      {
        this.param = params
        this.dataservice.getMovieById(params.id).subscribe((k)=>{
          console.log(k[0])
          this.movieModel=k[0]
        })
      }
    })
  }

  onSubmit(){
    if(this.param.id)
    {
      this.dataservice.updateMovie(this.movieModel).subscribe((res)=>{
        alert(res)
      })
    }
    else{

      this.dataservice.createMovie(this.movieModel).subscribe((res)=>{
        alert(res)
      
      })
    }
    
  }

}
