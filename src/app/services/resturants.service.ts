import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { RestaurantsTypes } from "../model/shred";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  constructor(private http: HttpClient) { }

  changeType: BehaviorSubject<any> = new BehaviorSubject(null);

  getTypes(): Observable<{ data: RestaurantsTypes[] }> {
    const url = `${environment.url}home/branch-types`;
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

  getRestaurantData(id:any): Observable<any> {
    const url = `${environment.url}restaurant/${id}`;
    // return this.http.get<any>(url);
    return of(
      {
        "data": {
            "restaurant": {
                "id": 1,
                "restaurant_id": 1,
                "theme_code": "Restaurantcafe",
                "sub_theme_code": "Restaurantcafe_pizza",
                "favourited_count": 0,
                "name": "بيتزا تشاو",
                "description": "بيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاو بيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاوبيتزا تشاو",
                "logo": "http://backend.eizymenu.com/storage/restaurant/gaHQifLvfth4jhgTDivyd0vAVqPoFMWlDJgOuD0G.jpg",
                "phone": "(360) 391-4600",
                "email": "becker.trudie@example.net",
                "country": {
                    "id": 1,
                    "country_id": 1,
                    "name": "مصر"
                },
                "governorate": {
                    "id": 4,
                    "governorate_id": 4,
                    "name": "الإسكندرية"
                },
                "region": {
                    "id": 34,
                    "region_id": 34,
                    "name": "الإبراهيمية"
                },
                "address": "magnam",
                "branchType": {
                    "id": 1,
                    "branch_id": 1,
                    "name": "مطاعم وكافيهات",
                    "address": null,
                    "phone": null,
                    "email": null,
                    "times_of_week": null
                },
                "times_of_week": [
                    {
                        "to": "23:00",
                        "day": "الأحد",
                        "from": "01:00"
                    },
                    {
                        "to": "23:00",
                        "day": "الأثنين",
                        "from": "01:00"
                    },
                    {
                        "to": "23:00",
                        "day": "الثلاثاء",
                        "from": "01:00"
                    },
                    {
                        "to": "23:00",
                        "day": "الأربعاء",
                        "from": "01:00"
                    },
                    {
                        "to": "23:00",
                        "day": "الخميس",
                        "from": "01:00"
                    }
                ],
                "is_fav": false,
                "rate": 0,
                "rate_count": 0,
                "open": false,
                "link_google_play": "google",
                "link_apple_store": "apple_store",
                "qr_image": "http://backend.eizymenu.com/storage/restaurant/restaurant_id_1.png",
                "lat": "-81.785206",
                "lng": "144.218393",
                "service_types": [
                    {
                        "id": 1,
                        "service_type_id": 1,
                        "name": "توصيل"
                    },
                    {
                        "id": 2,
                        "service_type_id": 2,
                        "name": "تيك اوى"
                    },
                    {
                        "id": 3,
                        "service_type_id": 3,
                        "name": "خدمة الطاولة"
                    },
                    {
                        "id": 4,
                        "service_type_id": 4,
                        "name": "ساعد نفسك"
                    }
                ]
            },
            "most_wanted_products": [],
            "menu": [
                {
                    "id": 2,
                    "menu_id": 2,
                    "code": null,
                    "image": "http://backend.eizymenu.com/storage/ranking/rKhe0D2TUPj0QLqP0OxpmDhXCey6GyRz6inqzPdZ.png",
                    "name": "مشروبات",
                    "subcategories": [
                        {
                            "id": 10,
                            "sub_category_id": 10,
                            "image": "http://backend.eizymenu.com/storage/subcategory/3NTcMoOSHekFK8JuCcOTub82BFI9Uf1yAcMmSqnc.jpg",
                            "name": "Doloribus_ar"
                        }
                    ],
                    "products": [
                        {
                            "id": 31,
                            "product_id": 31,
                            "name": "eaque_ar",
                            "description": "eaque_ar",
                            "price": 217.3600000000000136424205265939235687255859375,
                            "video": "http://www.grant.com/odit-harum-ut-totam-dignissimos-cupiditate-consectetur-nam-suscipit.html",
                            "icon": "http://backend.eizymenu.com/storage/product/9pxTerps6LZplsjBxjwnCj99QBpoQKJhWgQdTfkA.jpg",
                            "images": [],
                            "sizes": [],
                            "is_fav": false,
                            "rate": 0,
                            "rate_count": 0,
                            "model_type": "product",
                            "qty_cart": "0"
                        }
                    ]
                },
                {
                    "id": 5,
                    "menu_id": 5,
                    "code": null,
                    "image": "http://backend.eizymenu.com/storage/ranking/qYo9a5QE9XndQeWW55XC26DBM9kENy8xU9x2dwTO.jpg",
                    "name": "Nobis_ar",
                    "subcategories": [
                        {
                            "id": 15,
                            "sub_category_id": 15,
                            "image": "http://backend.eizymenu.com/storage/subcategory/O5LdDtcG6sJc5mCEvdPYSKbd5zUPXeVViirirUo6.jpg",
                            "name": "Velit_ar"
                        }
                    ],
                    "products": [
                        {
                            "id": 4,
                            "product_id": 4,
                            "name": "placeat_ar",
                            "description": "placeat_ar",
                            "price": 123.650000000000005684341886080801486968994140625,
                            "video": "http://klein.com/nesciunt-voluptatem-voluptatem-quod-veniam-ullam-sed",
                            "icon": "http://backend.eizymenu.com/storage/product/5FouOpEgnW6n3NW8HNcGZ65H6LT7xo2qNN82oGit.jpg",
                            "images": [],
                            "sizes": [],
                            "is_fav": false,
                            "rate": 0,
                            "rate_count": 0,
                            "model_type": "product",
                            "qty_cart": "0"
                        }
                    ]
                },
                {
                    "id": 8,
                    "menu_id": 8,
                    "code": null,
                    "image": "http://backend.eizymenu.com/storage/ranking/bT38u3SSitUCGA5s18BBBNY5xGMmq1N5riL08ZS0.jpg",
                    "name": "Et_ar",
                    "subcategories": [
                        {
                            "id": 7,
                            "sub_category_id": 7,
                            "image": "http://backend.eizymenu.com/storage/subcategory/sLSbjl2cQpFM5ARpvBOKGbCKT32qfGUBgucrhIcN.jpg",
                            "name": "Suscipit_ar"
                        }
                    ],
                    "products": [
                        {
                            "id": 12,
                            "product_id": 12,
                            "name": "beatae_ar",
                            "description": "beatae_ar",
                            "price": 233.479999999999989768184605054557323455810546875,
                            "video": "http://nikolaus.com/et-voluptas-ut-ab-autem-voluptatem.html",
                            "icon": "http://backend.eizymenu.com/storage/product/ELig8Zawc45LlPipnfdjfdKs3xP27kvadK5dBuzS.jpg",
                            "images": [],
                            "sizes": [],
                            "is_fav": false,
                            "rate": 0,
                            "rate_count": 0,
                            "model_type": "product",
                            "qty_cart": "0"
                        }
                    ]
                },
                {
                    "id": 10,
                    "menu_id": 10,
                    "code": null,
                    "image": "http://backend.eizymenu.com/storage/ranking/ox56gjfsE2QJvqxWxVw1lwhRqhZIniMviujTHbBc.jpg",
                    "name": "Sit_ar",
                    "subcategories": [
                        {
                            "id": 4,
                            "sub_category_id": 4,
                            "image": "http://backend.eizymenu.com/storage/subcategory/Xm9icNsOJbJz3rQZUF8ouHnlChhYgX5elNb7t8KN.jpg",
                            "name": "Sit_ar"
                        },
                        {
                            "id": 11,
                            "sub_category_id": 11,
                            "image": "http://backend.eizymenu.com/storage/subcategory/tSMbIjkbLFB74xzHVTXu8w5SaSG1CaMlvjlXcq5q.jpg",
                            "name": "At_ar"
                        }
                    ],
                    "products": [
                        {
                            "id": 23,
                            "product_id": 23,
                            "name": "praesentium_ar",
                            "description": "praesentium_ar",
                            "price": 170.979999999999989768184605054557323455810546875,
                            "video": "http://www.kiehn.info/aspernatur-et-a-aliquid-corrupti-libero-quibusdam-maxime-praesentium",
                            "icon": "http://backend.eizymenu.com/storage/product/tKz0Wlq88rTvXjjQT0I7H413fUZhFfsVQ4QEk2Yg.jpg",
                            "images": [],
                            "sizes": [],
                            "is_fav": false,
                            "rate": 0,
                            "rate_count": 0,
                            "model_type": "product",
                            "qty_cart": "0"
                        },
                        {
                            "id": 38,
                            "product_id": 38,
                            "name": "ut_ar",
                            "description": "ut_ar",
                            "price": 81.3299999999999982946974341757595539093017578125,
                            "video": "http://www.spinka.info/quod-eum-excepturi-enim-sunt-et-et.html",
                            "icon": "http://backend.eizymenu.com/storage/product/GZVxpVxCPh83xCQIPtm88GTKmsXaV7oqUeh01B0U.png",
                            "images": [],
                            "sizes": [],
                            "is_fav": false,
                            "rate": 0,
                            "rate_count": 0,
                            "model_type": "product",
                            "qty_cart": "0"
                        }
                    ]
                }
            ],
            "offers": [],
            "extras": [
                {
                    "id": 3,
                    "extra_id": 3,
                    "name": "voluptates_ar",
                    "price": 4,
                    "image": "http://backend.eizymenu.com/storage/extra/NdefBGk74nq6xEHE58v5P2x0V62EoLd29U2cDThC.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 9,
                    "extra_id": 9,
                    "name": "voluptate_ar",
                    "price": 4,
                    "image": "http://backend.eizymenu.com/storage/extra/GOEXzRHMAN8l6xL23mRJhOPr1j3zr4DqcAwr0OAQ.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 15,
                    "extra_id": 15,
                    "name": "distinctio_ar",
                    "price": 5,
                    "image": "http://backend.eizymenu.com/storage/extra/B1QaKZQZPKwfs3yihv8bel9Zrv0QrLZMBfRDeYQQ.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 16,
                    "extra_id": 16,
                    "name": "qui_ar",
                    "price": 1,
                    "image": "http://backend.eizymenu.com/storage/extra/nhSlppVLwBrAGqKTnRucsNiBQDYW3WXMUK8sOlmv.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 22,
                    "extra_id": 22,
                    "name": "accusantium_ar",
                    "price": 4,
                    "image": "http://backend.eizymenu.com/storage/extra/wWfUtui5lJmLrJtvuhjOBYZmVWyJ53yFbdJFhZxO.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 26,
                    "extra_id": 26,
                    "name": "laborum_ar",
                    "price": 9,
                    "image": "http://backend.eizymenu.com/storage/extra/tgrwqnayUzwD6mhc6nXEX7zDgRsN4rFxMfDSdSDF.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 29,
                    "extra_id": 29,
                    "name": "ad_ar",
                    "price": 9,
                    "image": "http://backend.eizymenu.com/storage/extra/Q5v79fDqElrRKJb2F7SwOi6tZXBtfSm8oeNrlfgp.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 35,
                    "extra_id": 35,
                    "name": "enim_ar",
                    "price": 4,
                    "image": "http://backend.eizymenu.com/storage/extra/yvCmVCzK5sv3xcbqRIiRMUQNQbB8GeHJc7DQIITc.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 36,
                    "extra_id": 36,
                    "name": "quo_ar",
                    "price": 4,
                    "image": "http://backend.eizymenu.com/storage/extra/vvaj0vstH3vkadVHEGjBAZ3grVqoPAuUChCDaFpe.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 39,
                    "extra_id": 39,
                    "name": "dolorem_ar",
                    "price": 5,
                    "image": "http://backend.eizymenu.com/storage/extra/NEJtXeVu0hkkLwUQclKTCiI1FsTQ4RFFsvhay9bC.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 40,
                    "extra_id": 40,
                    "name": "quas_ar",
                    "price": 0,
                    "image": "http://backend.eizymenu.com/storage/extra/yoDMmM1FM89OQat7dTvjzrhFW7Wz9f69I7D6w008.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 46,
                    "extra_id": 46,
                    "name": "non_ar",
                    "price": 6,
                    "image": "http://backend.eizymenu.com/storage/extra/1izxywAz5VqjF5bvR9f8SQ0oLz7vbW47WxCNMEZe.jpg",
                    "qty_cart": "0"
                },
                {
                    "id": 49,
                    "extra_id": 49,
                    "name": "dolores_ar",
                    "price": 2,
                    "image": "http://backend.eizymenu.com/storage/extra/iPccbgDkdne3eq3vqjL1aCK4rIBWmKduUD9DnX6q.jpg",
                    "qty_cart": "0"
                }
            ],
            "branches": [
                {
                    "id": 4,
                    "branch_id": 4,
                    "name": "ويف للماكولات والمشروبات ثيم جديد هيتربط بيه",
                    "address": "dolor",
                    "phone": "517.950.8018",
                    "email": "reynolds.hunter@example.net",
                    "times_of_week": [
                        {
                            "day": "1",
                            "from": "05:00",
                            "to": "23:00"
                        },
                        {
                            "day": "2",
                            "from": "05:00",
                            "to": "23:00"
                        },
                        {
                            "day": "3",
                            "from": "05:00",
                            "to": "23:00"
                        },
                        {
                            "day": "4",
                            "from": "05:00",
                            "to": "23:00"
                        },
                        {
                            "day": "5",
                            "from": "05:00",
                            "to": "23:00"
                        }
                    ]
                }
            ],
            "favourites": [],
            "rates": []
        },
        "message": "Restaurant Details",
        "status": true
    }
    )
  }

  getRestaurants(type: any): Observable<any> {
    const url = `${environment.url}home/restaurants?branch_type_id=${type}`;
    // return this.http.get<any>(url);
    return of(
      {
        "data": [
          {
            "id": 7,
            "restaurant_id": 7,
            "branch_type_id": 3,
            "branch_type_name": "حلويات ومخبوزات",
            "theme_code": "dessertbakery",
            "sub_theme_code": "dessertbakery",
            "name": "مطعم محمد احمد للحلويات",
            "description": "<p>مطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلويات</p>",
            "logo": "http://backend.eizymenu.com/storage/restaurant/IoWKgTZ9BLxaGyjATHVLQFXOs4xKyTSi0ecCXmmp.jpg",
            "country": {
              "id": 1,
              "country_id": 1,
              "name": "مصر"
            },
            "governorate": {
              "id": 4,
              "governorate_id": 4,
              "name": "الإسكندرية"
            },
            "region": {
              "id": 32,
              "region_id": 32,
              "name": "أبو قير"
            },
            "address": "Labs, أحمد محمد حسنين، الأزاريتة والشاطبي، قسم باب شرقي، الإسكندرية،، 6W59+JJ4, Al Azaritah WA Ash Shatebi, Bab Sharqi, Alexandria Governorate 5423021, Egypt",
            "is_fav": false,
            "rate": 0,
            "rate_count": 0,
            "open": false,
            "link_google_play": "google",
            "link_apple_store": "apple_store",
            "qr_image": "http://backend.eizymenu.com/assets/images/no-image.png",
            "lat": "31.208909664979537",
            "lng": "29.91903283593749"
          },
          {
            "id": 7,
            "restaurant_id": 7,
            "branch_type_id": 3,
            "branch_type_name": "حلويات ومخبوزات",
            "theme_code": "dessertbakery",
            "sub_theme_code": "dessertbakery",
            "name": " مطعم لافوار",
            "description": "<p>مطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلوياتمطعم محمد احمد للحلويات</p>",
            "logo": "http://backend.eizymenu.com/storage/restaurant/IoWKgTZ9BLxaGyjATHVLQFXOs4xKyTSi0ecCXmmp.jpg",
            "country": {
              "id": 1,
              "country_id": 1,
              "name": "مصر"
            },
            "governorate": {
              "id": 4,
              "governorate_id": 4,
              "name": "الإسكندرية"
            },
            "region": {
              "id": 32,
              "region_id": 32,
              "name": "أبو قير"
            },
            "address": "Labs, أحمد محمد حسنين، الأزاريتة والشاطبي، قسم باب شرقي، الإسكندرية،، 6W59+JJ4, Al Azaritah WA Ash Shatebi, Bab Sharqi, Alexandria Governorate 5423021, Egypt",
            "is_fav": false,
            "rate": 0,
            "rate_count": 0,
            "open": false,
            "link_google_play": "google",
            "link_apple_store": "apple_store",
            "qr_image": "http://backend.eizymenu.com/assets/images/no-image.png",
            "lat": "31.208909664979537",
            "lng": "29.91903283593749"
          }
          
          
        ],
        "message": "List of Restaurant if send branch type",
        "status": true,
        "paginator": {
          "total": 1,
          "count": 1,
          "currentPage": 1,
          "lastPage": 1,
          "hasMorePages": false,
          "nextPageUrl": null,
          "previousPageUrl": null
        }
      }
    )
  }
}
