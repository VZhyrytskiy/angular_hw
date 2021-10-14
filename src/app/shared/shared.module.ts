import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FontSizeChangerDirective } from './directives/font-size-changer.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, FontSizeChangerDirective, OrderByPipe],
  imports: [CommonModule],
  exports: [HighlightDirective, FontSizeChangerDirective, OrderByPipe],
})
export class SharedModule {}
