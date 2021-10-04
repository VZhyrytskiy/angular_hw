import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight('#f7f4f4');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight(null);
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  private highlight(color: string | null): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
    this.render.setStyle(this.el.nativeElement, 'border', '2px solid #befbfd');
  }
}
