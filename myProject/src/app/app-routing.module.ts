import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Comp/login/login.component';
import { SignupComponent } from './Comp/signup/signup.component';
import { HomeComponent } from './Comp/home/home.component';


const routes: Routes = [
  {component:LoginComponent,
  path:'login'
  },
  {
    component:SignupComponent,
    path:'signup'
  },
  {
    component:HomeComponent,
    path:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
