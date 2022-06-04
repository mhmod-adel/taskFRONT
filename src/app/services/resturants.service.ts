import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { RestaurantsTypes } from "../model/shred";

@Injectable({
  providedIn : 'root'
})
export class RestaurantsService {
  constructor(private http: HttpClient) { }

  changeType:BehaviorSubject<any> = new BehaviorSubject(null);

  getTypes(): Observable<{ data: RestaurantsTypes[] }> {
    const url = `${environment.url}branch-types`;
    // const url = `${environment.url}branch-types`;
    // return this.http.get<any>(url);
    return of(
      {
        "data": [
            {
                "id": 3,
                "branch_type_id": 3,
                "image": "http://backend.eizymenu.com/storage/branch_type/7er70vYL3wQdOqil2Ecq3VS1Lrl61aEOPnAvFeyl.jpg",
                "name": "حلويات ومخبوزات",
                "theme_code": "dessertbakery",
                "count": 1
            },
            {
                "id": 4,
                "branch_type_id": 4,
                "image": "http://backend.eizymenu.com/storage/branch_type/uzgYD3mLN0BZENccaUr5OfIhNNFbyGddqPqRxYGo.jpg",
                "name": "اكل صحى",
                "theme_code": "healthyfood",
                "count": 0
            },
            {
                "id": 1,
                "branch_type_id": 1,
                "image": "http://backend.eizymenu.com/storage/branch_type/hqd8hrrU9WyMlofqMuLm4LuNam1QW4PghqS3ApPN.jpg",
                "name": "مطاعم وكافيهات",
                "theme_code": "Restaurantcafe",
                "count": 5
            },
            {
                "id": 2,
                "branch_type_id": 2,
                "image": "http://backend.eizymenu.com/storage/branch_type/BWrVXl8Y0A0Q8YmvZ4jqREmXk60DKeKfZMziNiV2.jpg",
                "name": "اكل بيتى",
                "theme_code": "homefood",
                "count": 1
            }
        ],
        "message": "List of Branch types",
        "status": true
    }
    )
  }

  getRestaurants(type:any): Observable<any> {
    const url = `${environment.url}branch-types`;
    // const url = `${environment.url}branch-types`;
    // return this.http.get<any>(url);
    return of(
      {
        "data": [
            {
                "id": 3,
                "branch_type_id": 3,
                "image": "http://backend.eizymenu.com/storage/branch_type/7er70vYL3wQdOqil2Ecq3VS1Lrl61aEOPnAvFeyl.jpg",
                "name": "حلويات ومخبوزات",
                "theme_code": "dessertbakery",
                "count": 1
            },
            {
                "id": 4,
                "branch_type_id": 4,
                "image": "http://backend.eizymenu.com/storage/branch_type/uzgYD3mLN0BZENccaUr5OfIhNNFbyGddqPqRxYGo.jpg",
                "name": "اكل صحى",
                "theme_code": "healthyfood",
                "count": 0
            },
            {
                "id": 1,
                "branch_type_id": 1,
                "image": "http://backend.eizymenu.com/storage/branch_type/hqd8hrrU9WyMlofqMuLm4LuNam1QW4PghqS3ApPN.jpg",
                "name": "مطاعم وكافيهات",
                "theme_code": "Restaurantcafe",
                "count": 5
            },
            {
                "id": 2,
                "branch_type_id": 2,
                "image": "http://backend.eizymenu.com/storage/branch_type/BWrVXl8Y0A0Q8YmvZ4jqREmXk60DKeKfZMziNiV2.jpg",
                "name": "اكل بيتى",
                "theme_code": "homefood",
                "count": 1
            }
        ],
        "message": "List of Branch types",
        "status": true
    }
    )
  }
}
