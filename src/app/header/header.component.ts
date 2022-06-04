 
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
  color:string="tomato";
  i:number=0;
  maxWidth:any;
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

  
hide()
 { 
  this.menuShow="none"
 }
  getEvent( )
  {  
    this.maxWidth=window.innerWidth
     
     if(this.maxWidth > 480)
     {
      this.hide()
     }
     else
     {
      this.show();
     }
     
     
 

     
  };
  
  subscription: Subscription = new Subscription();
  typesList: RestaurantsTypes[] = [];
 
  currentId:any;
   

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
        
        this.currentId = this.typesList[0].id;
        this.changeType(this.typesList[0].id);
      })
    )
  }

  changeType(id:any){
    this.currentId = id;
    this._Restaurants.changeType.next(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
