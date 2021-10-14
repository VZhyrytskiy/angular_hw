import { SharedModule } from './../shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

import { FirstComponent } from './components/first-component/first.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [FirstComponent, CartListComponent, CartItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [FirstComponent, CartListComponent],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
})
export class CartModule {}
