import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductModel } from 'src/app/products/models/ProductModel';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  selectedProducts!: Array<ProductModel>;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.selectedProducts = this.cartService.getSelectedProducts();
  }

  trackByItems(index: number, el: ProductModel) {
    return el.orderDate;
  }
}
