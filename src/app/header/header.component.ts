import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
 

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
  
  
  color:string = "whitesmoke";
  color1:string = "whitesmoke";

    active(){
      this.color="tomato";
      this.color1="whitesmoke";
    }
    
  constructor() { }

  ngOnInit(): void {
     
  }
 
}
