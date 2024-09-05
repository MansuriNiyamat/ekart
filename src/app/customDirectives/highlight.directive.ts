import { input, Directive, ElementRef, Renderer2, HostBinding, HostListener } from "@angular/core";


@Directive({
selector:'[highlight]'
})
export class Highlight
{
  constructor(private el: ElementRef, private render: Renderer2){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  @HostListener('mouseenter')
  onMoustEnter(){
    console.log('mouse enter')
  }

  @HostListener('mouseout')
  onMouseOut(){
    console.log('mouse out')
  }
}
