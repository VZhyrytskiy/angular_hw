import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FontSizeChangerDirective } from './directives/font-size-changer.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HighlightDirective, FontSizeChangerDirective, OrderByPipe],
  imports: [CommonModule, FormsModule],
  exports: [
    HighlightDirective,
    FontSizeChangerDirective,
    OrderByPipe,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule {}
