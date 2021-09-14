import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  selectedProducts: Array<ProductModel> = [];
  fullPrice: number = 0;
  constructor() {}

  setSelectProduct(product: ProductModel) {
    this.selectedProducts.push(product);
  }
  getSelectedProducts() {
    return this.selectedProducts;
  }
  setPriceOfFullOrder() {
    this.selectedProducts.forEach((item) => (this.fullPrice += item.price));
  }
  getPriceOfFullOrder() {
    return this.fullPrice;
  }
}
