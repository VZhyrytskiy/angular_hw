import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ProductModel } from '../../../products/models/ProductModel';

import { Categories, Stock } from '../../models/cartModel';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  @Input() productItem!: ProductModel;
  @Output() addToCart = new EventEmitter();

  name!: string;
  description!: string;
  price!: number;
  isAvaliable!: boolean;
  avaliableOnStocks?: Array<Stock>;
  lastBuyersID?: Array<number>;
  category: string | undefined;
  orderDate!: Date;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.name = this.productItem.name;
    this.description = this.productItem.description;
    this.price = this.productItem.price;
    this.isAvaliable = this.productItem.isAvaliable;
    this.avaliableOnStocks = this.productItem.avaliableOnStocks;
    this.lastBuyersID = this.productItem.lastBuyersID;
    this.isAvaliable = this.productItem.isAvaliable;
    this.isAvaliable = this.productItem.isAvaliable;
    this.orderDate = new Date();

    switch (this.productItem.category) {
      case 'Book':
        this.category = Categories.Books;
        break;
      case 'Toy':
        this.category = Categories.Toys;
        break;
      case 'Food':
        this.category = Categories.Food;
        break;
      case 'Electronics':
        this.category = Categories.Electronics;
        break;

      default:
        this.category = undefined;
    }
  }

  onAddToCart(product: ProductModel) {
    this.cartService.setSelectProduct(product);
    this.cartService.setPriceOfFullOrder();
    this.addToCart.emit();
  }
}
