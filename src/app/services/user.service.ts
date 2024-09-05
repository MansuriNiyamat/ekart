import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class UserService {
  http: HttpClient = inject(HttpClient);

  createUser(user){
    return this.http.post('https://angularhttpclient-d3695-default-rtdb.firebaseio.com/user.json', user)
  }
}
