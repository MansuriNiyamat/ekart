import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import {Router} from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ekart';
  inpValue = ''
  http = inject(HttpClient)
  constructor(){
    this.http.post('127.0.0.1:3000/product',{name:'milk', price:30, description:"hello"} ).subscribe(res=>{
      console.log(res)
      console.log('from productsssss...........')
    })

 
  }
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
