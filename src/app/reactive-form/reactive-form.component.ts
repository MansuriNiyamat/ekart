import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserService } from '../services/user.service';
@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent  implements OnInit{
  users = [];
  reactiveForm: FormGroup;
  http: HttpClient = inject(HttpClient);
  userService = inject(UserService)
  constructor(){
    this.http.get('https://dummyjson.com/users?limit=5&skip=10').subscribe(res=>{
      console.log(res)
    })
    this.http.get('https://angularhttpclient-d3695-default-rtdb.firebaseio.com/user.json')
    .pipe(map((response)=>{
        let user = [];
        for (const key in response) {
          console.log(key)
          if (response.hasOwnProperty(key)) {
            user.push({...response[key], id:key})
          }
        }
        return user;
    }))
    .subscribe(res=>{
      this.users = res;
      console.log(res)
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.reactiveForm = new FormGroup({
          firstName: new FormControl(null, Validators.required),
          lastName: new FormControl(null, Validators.required),
          email: new FormControl(null, [Validators.required, Validators.email]),
          username: new FormControl(null),
          dob: new FormControl(null),
          gender: new FormControl('male'),
          address: new FormGroup({
            street: new FormControl(null),
            country: new FormControl(null),
            city: new FormControl(null),
            region: new FormControl(null),
            postal: new FormControl(null),
          }),
          skills: new FormArray([
            new FormControl(null, Validators.required),

          ]),
          experience: new FormArray([

          ])

      })
  }
  onFormSubmit(){
    this.userService.createUser(this.reactiveForm.value).subscribe(res=>console.log(res))
  }
  addSkill(){
    console.log('add skil called');
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  delete(i){
  const controls = <FormArray>this.reactiveForm.get('skills')
    controls.removeAt(i);
  }

  addExp(){
    const exp =     new FormGroup({
      companyName : new FormControl(null),
      position : new FormControl(null),
      totalExp : new FormControl(null),
      startDate : new FormControl(null),
     endDate : new FormControl(null),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(exp)

  }

  deleteExp(i){
    const controls = <FormArray>this.reactiveForm.get('experience')
    controls.removeAt(i);
  }
  deleteUser(id){
    this.http.delete('https://angularhttpclient-d3695-default-rtdb.firebaseio.com/user/'+ id+'.json', this.reactiveForm.value).subscribe(res=>{
      console.log(res)
    })
  }
}
