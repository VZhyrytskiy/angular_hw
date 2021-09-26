import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/ProductModel';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  recivedData!: Array<ProductModel>;
  fullPrice: number = 0;

  constructor(
    private cartService: CartService,
    private productsServiceService: ProductsService
  ) {}

  ngOnInit(): void {
    this.recivedData = this.productsServiceService.getProducts();
    console.log('Data recived');
  }

  public onAddToBasket(product: ProductModel) {
    this.cartService.setSelectProduct(product);
    console.log(`сообщение о покупке ${product.name}`);
  }
}
