import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from '@angular/core';
import { reduce, Subscription } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { RestaurantsTypes } from "../model/shred";
import { RestaurantsService } from "../services/resturants.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color: string = "whitesmoke";
  color1: string = "whitesmoke";
  subscription: Subscription = new Subscription();
  typesList: RestaurantsTypes[] = [];

  active() {
    this.color = "tomato";
    this.color1 = "whitesmoke";
  }

  constructor(
    private _Restaurants: RestaurantsService
  ) {}

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.subscription.add(
      this._Restaurants.getTypes().subscribe(res => {
        this.typesList = res?.data;
      })
    )
  }

  changeType(id:any){
    this._Restaurants.changeType.next(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
