import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private movie:DataServiceService) { 

  }
  submitted=true

  ngOnInit() { 
    this.movie.getMovies()
  }

  userModel:Credentials={}
  adminCredentials:Credentials={username:"admin", password:"admin@123"}
  userCredentials:Credentials={username:"user", password:"test@123"}
  
  onSubmit() {
    if(this.userModel.username===this.adminCredentials.username && this.userModel.password === this.adminCredentials.password)
    {
      this.router.navigate(['admin'])
      this.movie.setUSer(false)
    }
    else if(this.userModel.username===this.userCredentials.username && this.userModel.password === this.userCredentials.password)
    {
      this.router.navigate(['home'])
      this.movie.setUSer(true)

    }
    else{
      console.log("Error in credentials")
      this.submitted=false
    }
  }

}

interface Credentials {
  username?: string, 
  password?: string
}
