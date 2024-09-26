import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  tasks = [];
  reactiveForm: FormGroup;
  taskService = inject(TaskServiceService)
  constructor(){

  }
  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
          task_name: new FormControl('', Validators.required),
          descirption: new FormControl('', Validators.required),
          completed: new FormControl(''),

      })
  }
  onFormSubmit(){
    this.taskService.createTask(this.reactiveForm.value).subscribe(res=>console.log(res), (err)=>{
      console.log(err.message, err)
    })
  }


  deleteTask(i){
  const controls = <FormArray>this.reactiveForm.get('skills')
    controls.removeAt(i);
  }

}
