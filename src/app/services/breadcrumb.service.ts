import { Breadcrumb } from './../models/breadcrumb';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  public tree:BehaviorSubject<Breadcrumb> = new BehaviorSubject<any>(null);
  constructor() { }
}
