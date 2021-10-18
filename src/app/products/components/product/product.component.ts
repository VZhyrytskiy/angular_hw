import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productItem!: ProductModel;
  @Output() addToCart = new EventEmitter();

  isProductOnAnyStock: boolean = false;

  constructor() {}

  ngOnInit(): void {
    //trying to find product on any stock
    if (
      this.productItem.avaliableOnStocks.find((item) => item.productAmount > 0)
    ) {
      this.isProductOnAnyStock = true;
    }
  }

  onAddCart() {
    this.addToCart.emit(this.productItem);
  }
}
