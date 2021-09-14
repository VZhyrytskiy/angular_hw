import { Injectable } from '@angular/core';
import data from '../../data.json';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  recivedData: Array<ProductModel> = data.data;

  constructor() {}

  getProducts() {
    return this.recivedData;
  }
}
