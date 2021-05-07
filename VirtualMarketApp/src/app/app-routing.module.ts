import { HomeComponent } from 'src/app/Home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DummySignInComponent} from './SignIn/dummySignIn.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'aboutus', component: HomeComponent },
  { path: 'signup', component: DummySignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // , {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
