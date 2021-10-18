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

  @Output() addProductItem = new EventEmitter<ProductModel>();
  @Output() removeProductItem = new EventEmitter<ProductModel>();

  constructor() {}

  onAddAnotherOneProduct(): void {
    this.addProductItem.emit(this.productItem);
  }

  onRemoveAnotherOneProduct(): void {
    this.removeProductItem.emit(this.productItem);
  }
}
