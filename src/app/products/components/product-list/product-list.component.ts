import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Output()
  addProduct: EventEmitter<ProductModel> = new EventEmitter();

  productsData!: Array<ProductModel>;
  fullPrice: number = 0;

  constructor(private productsServiceService: ProductsService) {}

  ngOnInit(): void {
    this.productsData = this.productsServiceService.getProducts();
    console.log('Data recived');
  }

  public onAddToBasket(product: ProductModel) {
    this.addProduct.emit(product);
    console.log(`сообщение о покупке ${product.name}`);
  }
}
