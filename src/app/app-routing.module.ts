import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookComponent } from './book/book/book.component';

const routes: Routes = [

  { path :'',component:LoginComponent},
  { path :'login',component:LoginComponent},
  { path :'register',component:RegisterComponent},
  { path :'book',component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
