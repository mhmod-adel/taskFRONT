import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { RestaurantsService } from "../services/resturants.service";
@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent implements OnInit {
  @Input() restaurant: any;
  constructor() {

  }

  ngOnInit(): void {
  }

}
