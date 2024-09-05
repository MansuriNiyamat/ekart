import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableItem]'
})
export class DisableItemDirective {

  @Input() set disableItem(disable: boolean){
    if(disable){
      this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'pink')
      this.render.setStyle(this.el.nativeElement, 'opacity', '0.3')
    }
  }
  constructor(private el: ElementRef, private render: Renderer2) {

   }

}
