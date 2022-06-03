import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ResturantApiService {
restArr=[];
  constructor(public _http : HttpClient) {
    
    
   }
   getArr():Observable<any>
   {
    return this._http.get('https://jsonplaceholder.typicode.com/posts') ;
   }
}
/*'https://schema.postman.com/json/collection/v2.1.0/collection.json'*/