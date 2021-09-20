import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { ProductsServiceService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponentComponent implements OnInit {
  // receivedData?
  recivedData!: Array<ProductModel>;

  constructor(private productsServiceService: ProductsServiceService) {}

  ngOnInit(): void {
    this.recivedData = this.productsServiceService.getProducts();
    console.log('Data recived');
  }
}
