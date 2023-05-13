import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/headerComponent/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/authorizationComponent/login-page.component';
import { CardComponentComponent } from './components/cardComponent/card-component.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { FooterComponent } from './components/footerComponent/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    CardComponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    RouterLinkActive,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
