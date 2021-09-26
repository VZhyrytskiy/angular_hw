import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/ProductModel';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  selectedProducts!: { productsList: Array<ProductModel>; fullPrice: number };
  productsInBasket!: Array<ProductModel>;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.selectedProducts = this.cartService.getSelectedProducts();
    this.productsInBasket = this.selectedProducts.productsList;
  }

  trackByItems(index: number, el: ProductModel) {
    return el.orderDate;
  }

  addProduct(productItem: ProductModel) {
    this.cartService.setSelectProduct(productItem);
  }

  removeProductItem(productItem: ProductModel) {
    this.cartService.removeProduct(productItem);
  }
}
