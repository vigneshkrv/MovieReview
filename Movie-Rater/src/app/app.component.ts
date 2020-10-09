import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Movie-Rater';
  user:boolean
  constructor(private service: DataServiceService, private router: Router){

  }

  ngOnInit() {
    
  }

  navigate(){
    console.log(this.user)
    if(this.service.user)
    {
      this.router.navigate(['home'])
    } 
    else{
      this.router.navigate(['admin'])
    }
  }
}
