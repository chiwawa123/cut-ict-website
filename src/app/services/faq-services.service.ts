import { FaqCategory } from './../models/faq-category';
import { ServerDetails } from './../models/server-details';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqServices {

  private serverDetails = new ServerDetails();
  constructor(
    private _http:HttpClient
  ) { }

  public getCategories():Observable<FaqCategory[]>{

    return this._http.get<FaqCategory[]>(`${this.serverDetails.api}faqs/categories-solutions-list?category_id=0`);
  }
}
