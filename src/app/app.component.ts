import { Component, ElementRef, inject, viewChild } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ekart';
  inpValue = ''
  getChess(){
    return false
  }

  router = inject(Router);


  childData = [1,2,3,4,5,6]
  change(e:Event){
    console.log(e)
  }

  subValue(val:string){
    this.inpValue = val;
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit works from parent app componrnt')
    this.router.navigate
  }
}
