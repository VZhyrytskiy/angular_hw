import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSizeChanger]',
})
export class FontSizeChangerDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') onMouseenter(): void {
    this.render.setStyle(this.el.nativeElement, 'border-radius', '30px');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.render.setStyle(this.el.nativeElement, 'border-radius', '');
  }
}
