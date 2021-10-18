import { SharedModule } from './../shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

registerLocaleData(localeRu);

import { FirstComponent } from './components/first-component/first.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FirstComponent, CartListComponent, CartItemComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  exports: [FirstComponent, CartListComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
})
export class CartModule {}
