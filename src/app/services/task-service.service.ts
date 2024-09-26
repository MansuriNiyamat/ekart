import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }
  http: HttpClient = inject(HttpClient);

  url = 'api/v1/tasks'
  createTask(task){
    return this.http.post(this.url, task)
  }
}
