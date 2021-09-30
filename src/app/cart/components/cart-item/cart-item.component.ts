import { ProductModel } from 'src/app/products/models/ProductModel';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() productItem!: ProductModel;
  @Input() amountOfProduct: number | undefined;
  @Output()
  addProductItem = new EventEmitter();
  @Output() removeProductItem = new EventEmitter();

  constructor() {}

  onAddAnotherOneProduct() {
    this.addProductItem.emit(this.productItem);
  }

  onRemoveAnotherOneProduct() {
    this.removeProductItem.emit(this.productItem);
  }
}
