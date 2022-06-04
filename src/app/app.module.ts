import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ResturantComponent } from './resturant/resturant.component';
import { RestHomeComponent } from './rest-home/rest-home.component';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { OfferComponent } from './resturant-details/offer/offer.component';

const approutes: Routes =
  [
    { path: 'home', component: HomeComponent },
    { path: 'rest-home', component: RestHomeComponent },
    { path: 'restaurant-details/:id', component: ResturantDetailsComponent },
    { path: '', component: HomeComponent }
  ];



@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResturantComponent,
    RestHomeComponent,
    ResturantDetailsComponent,
    OfferComponent
  ],
  imports: [
    CarouselModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
