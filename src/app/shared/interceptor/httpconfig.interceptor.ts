import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PQA_API } from 'app/app.api';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private router: Router, private _cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor');
    const hasJSessionId: string = this._cookieService.get('JSESSIONID');
    console.log('Pegou JSESSIONID');
    console.log(hasJSessionId);
    const url = PQA_API.replace('api/', '');
    console.log(url);
    console.log('url');
    const hasId: string = localStorage.getItem('id');
    console.log('Setou id' + hasId);
    const hasName: string = localStorage.getItem('nome');
    console.log('Setou nome' + hasName);
    const hasPerfil: string = localStorage.getItem('perfil');
    console.log('Setou perfil' + hasPerfil);

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        console.log('entrou no handle');
        console.log(request);
        if (hasJSessionId && hasId && hasName && hasPerfil) {
        } else {
          if (request.url.includes('carregaUsuario')) {
            return event;
          }
          window.location.href = url + 'login';
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        // if (err.status === 0) {
        //   console.log('status 0 -> ', err);
        //   this.router.navigate(['/error'], { queryParams: { status: 0 } });
        //   return [];
        // }

        if (err.status === 401 || err.status === 403) {
          this.router.navigate(['/forbidden']);
          return [];
        }

        if (err.status === 422) {
          window.location.href = url + 'login';
          return [];
        }

        // if (err.status === 400 || err.status === 500) {
        //   console.log('Error: ', err.status, err);
        //   this.router.navigate(['/error']);
        //   return [];
        // }

        console.log(err);
        return throwError(err);
      })
    );
  }
}
