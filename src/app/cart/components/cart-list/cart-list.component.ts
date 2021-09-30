import { ProductModel } from './../../../products/models/ProductModel';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterContentChecked,
} from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements AfterContentChecked {
  @Input() selectedProduct!: ProductModel[];

  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter();
  @Output() removeProduct: EventEmitter<ProductModel> = new EventEmitter();

  fullPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngAfterContentChecked(): void {
    this.fullPrice = this.cartService.getFullPrice();
  }

  trackByItems(index: number, el: ProductModel) {
    return el.orderDate;
  }

  onAddProductItem(productItem: ProductModel) {
    this.addProduct.emit(productItem);
  }

  onRemoveAnotherOneProduct(productItem: ProductModel) {
    this.removeProduct.emit(productItem);
  }
}
