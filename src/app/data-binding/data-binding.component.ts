import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
@Input()
  data:number[] = []

  @Output()
  dataChange = new EventEmitter();
  ref = ''
  title = 'Data Binding';
  ev = 'input event';
  twoWay = 'two way'
  onInput(event:any){
    this.ev = event.target.value
    this.dataChange.emit(this.ev)

  }
  getInput(r:HTMLInputElement){
      this.ref = r.value
  }
}
