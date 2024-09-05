import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class httpInterceptService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
      console.log('interceptor called')
      const modifiedReq = req.clone({headers:req.headers.append('auth','tokenxyzzzzz')})
      return next.handle(modifiedReq).pipe(tap(event=>{
        if(event.type === HttpEventType.Response){
          console.log('response has arrived');
          console.log(event.body)
        }
      }))
  }
}
