import { 
    HttpInterceptor, 
    HttpRequest, 
    HttpHandler, 
    HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                console.log(error);

                return of(error);
            })
        );
    }
}