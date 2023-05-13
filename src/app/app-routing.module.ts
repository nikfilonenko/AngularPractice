import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardComponentComponent} from "./components/cardComponent/card-component.component";
import {LoginPageComponent} from "./components/authorizationComponent/login-page.component";

const appRoutes: Routes =[
  { path: '', component: CardComponentComponent},
  { path: 'login-page', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
