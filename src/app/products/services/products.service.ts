import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import data from '../../data.json';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  recivedData: ProductModel[] = data.data;

  constructor() {}

  getProducts(): Observable<ProductModel[]> {
    return  new Observable<ProductModel[]>((observer: Subscriber<ProductModel[]>) => {
      setTimeout(() => {
        observer.next(this.recivedData);
      }, 1000);  
    })
  }
}
