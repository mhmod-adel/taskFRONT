import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { reduce, Subscription } from 'rxjs';
import { RestaurantsService } from "../services/resturants.service";

@Component({
  selector: 'app-rest-home',
  templateUrl: './rest-home.component.html',
  styleUrls: ['./rest-home.component.css']
})
export class RestHomeComponent implements OnInit {
  red: string = "red";
  toggele1: string = "block";
  toggele2: string = "none";
  toggele3: string = "none";
  color1: string = "rgba(255, 99, 71, 0.5)";
  color2: string = "rgba(255, 99, 71, 0.1)";
  color3: string = "rgba(255, 99, 71, 0.1)";
  subscription: Subscription = new Subscription();

  toggeleMenu() {
    this.toggele1 = "block";
    this.toggele2 = "none";
    this.toggele3 = "none";
    this.color1 = "rgba(255, 99, 71, 0.5)";
    this.color2 = "rgba(255, 99, 71, 0.1)";
    this.color3 = "rgba(255, 99, 71, 0.1)";
  }

  toggeleFav() {
    this.toggele1 = "none";
    this.toggele2 = "block";
    this.toggele3 = "none";
    this.color1 = "rgba(255, 99, 71, 0.1)";
    this.color2 = "rgba(255, 99, 71, 0.5)";
    this.color3 = "rgba(255, 99, 71, 0.1)";
  }

  toggeleReviwe() {
    this.toggele1 = "none";
    this.toggele2 = "none";
    this.toggele3 = "flex";
    this.color1 = "rgba(255, 99, 71, 0.1)";
    this.color2 = "rgba(255, 99, 71, 0.1)";
    this.color3 = "rgba(255, 99, 71, 0.5)";
  }

  /*------------- OWEL SLIDER-------------------*/
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: false
  }

  constructor(
    private _Restaurants: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.subscription.add(
      this._Restaurants.getTypes().subscribe(res => {
        // this.typesList = res?.data;
      })
    )
  }

}
