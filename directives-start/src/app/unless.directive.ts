import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // the property to bind and the directive must be the same name
  // when used in html, with the *, it converts to ng-Template and bind to that property name
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);

    } else {
      this.viewRef.clear();
    }
  }

  // what to reference: TemplateRef -- ngTemplate (like ElementReference for an element)
  // where to place, viewContainterRef
  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}
