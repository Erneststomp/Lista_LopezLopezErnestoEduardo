import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

}
