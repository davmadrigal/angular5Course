import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highLightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');

  }

   @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
   // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
