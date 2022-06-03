import { Component, OnInit } from '@angular/core';
import{ResturantApiService} from'../resturant-api.service'
 
@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent implements OnInit {
 resurantArr=[];
 hero = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
 ];
  constructor(_ResturantApiService:ResturantApiService) { 
    
     _ResturantApiService.getArr().subscribe(x => this.resurantArr = x);
     console.log(this.resurantArr)
  }

  ngOnInit(): void {
  }

}
