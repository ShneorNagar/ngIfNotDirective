import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ngIfNot]',
})
export class NgIfNotDirective implements OnInit, OnChanges {
  @Input() ngIfNot: boolean;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('ngIfNot' in changes) {
      this.updateView();
    }
  }

  ngOnInit(): void {
    this.updateView();
  }

  private updateView(): void {
    if (!this.ngIfNot) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
