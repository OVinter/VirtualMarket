import { HomeComponent } from 'src/app/Home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './SignIn/signIn.component';
import {MyProductsComponent} from './myProducts/myProducts.component';
import {LogoutComponent} from './Logout/logout.component';
import {AddProductComponent} from './AddProduct/addProduct.component';
import {ModifyProductComponent} from './ModifyProduct/modifyProduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: MyProductsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignInComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'products/modify', component: ModifyProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // , {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
