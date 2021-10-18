import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import db from '../../data.json';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  recivedData: ProductModel[] = db.data;

  constructor() {}

  getProducts(): Observable<ProductModel[]> {
    return  new Observable<ProductModel[]>((observer: Subscriber<ProductModel[]>) => {
      setTimeout(() => {
        observer.next(this.recivedData);
      }, 1000);
    })
  }
}
