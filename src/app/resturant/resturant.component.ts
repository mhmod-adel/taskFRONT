import { Component, Input, OnInit } from '@angular/core';

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
