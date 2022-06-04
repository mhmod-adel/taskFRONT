import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { RestaurantsService } from "../services/resturants.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription = new Subscription();
  restaurants = [];

  constructor(
    private _Restaurants: RestaurantsService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this._Restaurants.changeType.subscribe(res => {
        if(res){
          this.getRestaurantByType(res);
        }
      })
    )
  }

  getRestaurantByType(type:any) {
    this.subscription.add(
      this._Restaurants.getRestaurants(type).subscribe(res => {
        console.log(res);
        this.restaurants = res?.data;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
