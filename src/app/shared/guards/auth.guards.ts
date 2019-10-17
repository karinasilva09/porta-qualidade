import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { PQA_API } from 'app/app.api';
import { LoginService } from 'app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router, private _cookieService: CookieService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('Auth.guard');
    const hasJSessionId: string = this._cookieService.get('JSESSIONID');
    const url = PQA_API.replace('api/', '');
    const params = new HttpParams().append('id', hasJSessionId);
    console.log('Auth.guard');
    console.log('url');
    console.log(url);
    console.log('login');
    console.log(hasJSessionId);

    if (hasJSessionId) {
      return this.loginService.carregaUsuario(params).pipe(
        map(
          data => {
            console.log('setando login');
            localStorage.setItem('id', data.id);
            console.log('setando id');
            localStorage.setItem('nome', data.nome);
            console.log('setando nome');
            localStorage.setItem('perfil', JSON.stringify(data.perfil));
            console.log('setando perfil');
          },
          () => {
            this.loginService.clearLocalStorage();
            this._cookieService.remove('JSESSIONID');
            window.location.href = url + 'login';
            return false;
          }
        ),
        flatMap(() => {
          const paramsTela = new HttpParams().append('usuario', localStorage.getItem('id')).append('tela', route.routeConfig.path);
          return this.loginService.carregarComponentes(paramsTela).pipe(
            map(
              data => {
                if (!data || data.componentes.length === 0) {
                  this.router.navigate(['/forbidden']);
                }
                localStorage.removeItem('componentes');
                localStorage.setItem('componentes', JSON.stringify(data.componentes));
                return true;
              },
              () => {
                this.router.navigate(['/forbidden']);
                return false;
              }
            )
          );
        })
      );
    } else {
      window.location.href = url + 'login';
      this.loginService.clearLocalStorage();
      this._cookieService.remove('JSESSIONID');
      return false;
    }
  }
}
