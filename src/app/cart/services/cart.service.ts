import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedProducts: Array<ProductModel> = [];
  private fullPrice: number = 0;

  constructor() {}

  setSelectProduct(product: ProductModel) {
    let samePosition = this.selectedProducts.find(
      (item) => item.name === product.name
    );
    if (samePosition) {
      samePosition.amountInBasket
        ? (samePosition.amountInBasket += 1)
        : (samePosition.amountInBasket = 2);
    } else {
      product.amountInBasket = 1;
      this.selectedProducts.push(product);
    }
    this.setPriceOfFullOrder();
  }

  getSelectedProducts() {
    return this.selectedProducts;
  }

  getFullPrice() {
    return this.fullPrice;
  }

  removeProduct(product: ProductModel) {
    let samePosition = this.selectedProducts.find(
      (item) => item.name === product.name
    );

    if (samePosition?.amountInBasket) {
      if (samePosition.amountInBasket > 1) {
        samePosition.amountInBasket -= 1;
      } else {
        let index = this.selectedProducts.findIndex(
          (item) => item.name === product.name
        );

        this.selectedProducts.splice(index, 1);
      }
    }
    this.setPriceOfFullOrder();
  }

  setPriceOfFullOrder() {
    this.fullPrice = this.selectedProducts.reduce((sum, item) => {
      if (item.amountInBasket) {
        return (sum += item.price * item.amountInBasket);
      } else {
        return (sum += item.price);
      }
    }, 0);
  }
}
