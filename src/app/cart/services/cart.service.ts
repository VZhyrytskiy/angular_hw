import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  selectedProducts: { productsList: Array<ProductModel>; fullPrice: number } = {
    productsList: [],
    fullPrice: 0,
  };

  constructor() {}

  setSelectProduct(product: ProductModel) {
    let samePosition = this.selectedProducts.productsList.find(
      (item) => item.name === product.name
    );
    if (samePosition) {
      samePosition.amountInBasket
        ? (samePosition.amountInBasket += 1)
        : (samePosition.amountInBasket = 2);
    } else {
      this.selectedProducts.productsList.push(product);
    }
    this.setPriceOfFullOrder();
  }

  getSelectedProducts() {
    return this.selectedProducts;
  }

  removeProduct(product: ProductModel) {
    let samePosition = this.selectedProducts.productsList.find(
      (item) => item.name === product.name
    );

    if (samePosition?.amountInBasket) {
      if (samePosition.amountInBasket > 1) {
        samePosition.amountInBasket -= 1;
      } else {
        let index = this.selectedProducts.productsList.findIndex(
          (item) => item.name === product.name
        );

        this.selectedProducts.productsList.splice(index, 1);
      }
    }
    this.setPriceOfFullOrder();
  }

  setPriceOfFullOrder() {
    this.selectedProducts.fullPrice = this.selectedProducts.productsList.reduce(
      (sum, item) => {
        if (item.amountInBasket) {
          return (sum += item.price * item.amountInBasket);
        } else {
          return (sum += item.price);
        }
      },
      0
    );
  }
}
