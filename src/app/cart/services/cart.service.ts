import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: Array<ProductModel> = [];
  private totalQuantity: number = 0;
  private totalSum: number = 0;

  constructor() {}

  addProduct(product: ProductModel) {
    let samePosition = this.cartProducts.find(
      (item) => item.name === product.name
    );
    if (samePosition) {
      samePosition.amountInBasket
        ? (samePosition.amountInBasket += 1)
        : (samePosition.amountInBasket = 2);
    } else {
      product.amountInBasket = 1;
      this.cartProducts.push(product);
    }
    this.updateCartData();
  }

  getTotalQuantity() {
    return this.totalQuantity;
  }

  getProducts() {
    return this.cartProducts;
  }

  getFullPrice() {
    return this.totalSum;
  }

  removeProduct(product: ProductModel) {
    let samePosition = this.cartProducts.find(
      (item) => item.name === product.name
    );

    if (samePosition?.amountInBasket) {
      if (samePosition.amountInBasket > 1) {
        samePosition.amountInBasket -= 1;
      } else {
        let index = this.cartProducts.findIndex(
          (item) => item.name === product.name
        );

        this.cartProducts.splice(index, 1);
      }
    }
    this.updateCartData();
  }

  private changeQuantity(product: ProductModel, amount: number) {
    const productToChange = this.cartProducts.find(
      (item) => item.name === product.name
    );
    if (productToChange?.amountInBasket) {
      productToChange.amountInBasket += amount;
    }
    this.updateCartData();
  }

  increaseQuantity(product: ProductModel, amount: number) {
    this.changeQuantity(product, amount);
  }

  decreaseQuantity(product: ProductModel, amount: number) {
    this.changeQuantity(product, -amount);
  }

  removeAllProducts() {
    this.cartProducts = [];
  }

  private updateCartData() {
    this.totalSum = this.cartProducts.reduce((sum, item) => {
      if (item.amountInBasket) {
        return (sum += item.price * item.amountInBasket);
      } else {
        return (sum += item.price);
      }
    }, 0);
    this.totalQuantity = this.cartProducts.reduce((amount, item) => {
      if (item.amountInBasket) {
        return (amount += item.amountInBasket);
      } else {
        return amount;
      }
    }, 0);
  }

  isEmptyCart() {
    return this.cartProducts.length > 0 ? false : true;
  }
}
