import { ProductModel } from './../../../products/models/ProductModel';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterContentChecked,
  DoCheck,
  IterableDiffers,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers:[OrderByPipe]
})
export class CartListComponent implements AfterContentChecked, DoCheck {
  @Input() selectedProduct: ProductModel[] = [];

  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter();
  @Output() removeProduct: EventEmitter<ProductModel> = new EventEmitter();

  fullPrice: number = 0;
  differ: any;

  constructor(private cartService: CartService, private orderPipe: OrderByPipe, differs: IterableDiffers) {
    this.differ = differs.find(this.selectedProduct).create();
  }

ngDoCheck():void{
  let changes = this.differ.diff(this.selectedProduct)
  if(changes){
    changes.forEachAddedItem(() => this.orderPipe.transform(this.selectedProduct, 'price', true))
  }
}

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
