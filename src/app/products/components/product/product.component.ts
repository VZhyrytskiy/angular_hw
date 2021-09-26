import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  productItem!: ProductModel;

  constructor() {}

  public onAddToBasket() {
    console.log(`сообщение о покупке ${this.productItem.name}`);
  }
}
