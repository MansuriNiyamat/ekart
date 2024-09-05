import {Directive, ElementRef, Renderer2} from '@angular/core'
@Directive({
  selector:'[setBackground]'
})
export class SetBackground{
  constructor(private element:ElementRef, private render: Renderer2){
     }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      // this.element.nativeElement.style.backgroundColor = 'red'
      // this.element.nativeElement.style.color = 'yellow'
      this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'red')
      this.render.setStyle(this.element.nativeElement, 'color', 'white')
    }
}
