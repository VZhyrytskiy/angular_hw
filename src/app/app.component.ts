import { CartService } from 'src/app/cart/services/cart.service';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ProductModel } from './products/models/ProductModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;

  selectedProduct: ProductModel[];
  fullPrice: number;

  constructor(private cartService: CartService) {
    this.selectedProduct = this.cartService.getSelectedProducts();
    this.fullPrice = this.cartService.getFullPrice();
  }

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Caramba shop';
  }

  onAddProductItem(productItem: ProductModel) {
    this.cartService.setSelectProduct(productItem);
  }

  onRemoveProductItem(productItem: ProductModel) {
    this.cartService.removeProduct(productItem);
  }
}
