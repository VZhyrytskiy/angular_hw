import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModule } from './../products/products.module';

import { FirstComponent } from './components/first-component/first.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [FirstComponent, CartListComponent],
  imports: [CommonModule],
  exports: [FirstComponent, CartListComponent],
  providers: [],
})
export class CartModule {}
