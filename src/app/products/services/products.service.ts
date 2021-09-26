import { Injectable } from '@angular/core';
import data from '../../data.json';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  recivedData: Array<ProductModel> = data.data;

  constructor() {}

  getProducts() {
    return this.recivedData;
  }
}
