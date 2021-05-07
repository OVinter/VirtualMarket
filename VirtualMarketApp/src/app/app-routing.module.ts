import { HomeComponent } from 'src/app/Home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './SignIn/signIn.component';
import {MyProductsComponent} from './myProducts/myProducts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: MyProductsComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'aboutus', component: HomeComponent },
  { path: 'signup', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // , {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
