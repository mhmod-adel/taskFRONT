import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { Subscription } from "rxjs";
import { RestaurantsService } from "../services/resturants.service";

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.css']
})
export class ResturantDetailsComponent implements OnInit {
  restId: any;
  restData: any;
  subscription: Subscription = new Subscription();

  // =====================
  red: string = "red";
  toggele1: string = "block";
  toggele2: string = "none";
  toggele3: string = "none";
  color1: string = "rgba(255, 99, 71, 0.5)";
  color2: string = "rgba(255, 99, 71, 0.1)";
  color3: string = "rgba(255, 99, 71, 0.1)";
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
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  // =====================
  constructor(
    private activateRoute: ActivatedRoute,
    private _Restaurants: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.restId = this.activateRoute.snapshot.params['id'];
    if (this.restId) {
      this.getRestaurantData();
    }
  }

  getRestaurantData() {
    this.subscription.add(
      this._Restaurants.getRestaurantData(this.restId).subscribe(res => {
        this.restData = res?.data;
        console.log(this.restData);
      })
    )
  }

}
