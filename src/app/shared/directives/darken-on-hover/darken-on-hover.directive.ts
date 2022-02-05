import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseover')
  mouseEntra() {
    this.renderer.setElementStyle(this.element.nativeElement,'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  mouseSai() {
    this.renderer.setElementStyle(this.element.nativeElement,'filter', 'brightness(100%)');
  }

}
