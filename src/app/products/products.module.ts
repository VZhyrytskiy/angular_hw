import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, CartModule],
  exports: [ProductComponent, ProductListComponent],
})
export class ProductsModule {}
