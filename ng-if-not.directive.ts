import {
  Directive,
  ElementRef,
  Input,
  ViewContainerRef,
  TemplateRef,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[ngIfNot]',
})
export class NgIfNotDirective implements OnInit {
  @Input() ngIfNot: boolean;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    if (!this.ngIfNot) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
