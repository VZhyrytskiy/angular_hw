import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  recivedData!: Array<ProductModel>;

  constructor(private productsServiceService: ProductsService) {}

  ngOnInit(): void {
    this.recivedData = this.productsServiceService.getProducts();
    console.log('Data recived');
  }
}
