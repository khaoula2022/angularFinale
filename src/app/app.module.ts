import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';



import { environment } from '../environments/environment';

//import { AngularFireModule } from '@angular/fire';
import { AuthService } from './shared/auth.service';
import { ContenuComponent } from './contenu/contenu.component';
import { LivreComponent } from './livre/livre.component';
import { HomeComponent } from './home/home.component';
import { ListlivresComponent } from './listlivres/listlivres.component';
import { CreateBookComponent } from './create-book/create-book.component';




@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LoginComponent,
    ContenuComponent,
    LivreComponent,
    HomeComponent,
    ListlivresComponent,
    CreateBookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    //AngularFireModule.initializeApp(environment.Firebase, 'angular-auth-firebase'),
    //AngularFireDatabaseModule,
    //AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
