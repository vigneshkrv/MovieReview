import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [{path:"",redirectTo:"login", pathMatch:"full"},
                          {path:"login",component:LoginComponent},
                        {path:"admin",component:AdminComponent},
                        {path:"home",component:HomeComponent},
                      {path:"movie", component: MovieComponent},
                    {path:"createMovie", component: CreateMovieComponent}];
                      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
