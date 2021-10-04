import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FontSizeChangerDirective } from './directives/font-size-changer.directive';

@NgModule({
  declarations: [HighlightDirective, FontSizeChangerDirective],
  imports: [CommonModule],
  exports: [HighlightDirective, FontSizeChangerDirective],
})
export class SharedModule {}
