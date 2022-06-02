import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
