 
import { Component, OnInit } from '@angular/core';
import { reduce, Subscription } from 'rxjs';
 
import { RestaurantsTypes } from "../model/shred";
import { RestaurantsService } from "../services/resturants.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuShow:string="none";
  i:number=0;
  show(){
    switch(this.menuShow) { 
      case this.menuShow="none" :
         //statements; 
         this.menuShow="block" ;

         break; 
       
      case  this.menuShow="block": 
         //statements; 
         this.menuShow="none"
         break; 
      
       
   } 
  };
  
  
  subscription: Subscription = new Subscription();
  typesList: RestaurantsTypes[] = [];
 

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
