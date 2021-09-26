import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstComponent } from './components/first-component/first.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [FirstComponent, CartListComponent, CartItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [FirstComponent, CartListComponent],
  providers: [],
})
export class CartModule {}
