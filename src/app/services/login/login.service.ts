import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PQA_API } from 'app/app.api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  static url: any;

  login(params: any): Observable<any> {
    return this.http.get<any>(`${PQA_API}login/`, { params });
  }

  carregarComponentes(params: any): Observable<any> {
    return this.http.get<any>(`${PQA_API}carregarComponentes/`, { params });
  }

  carregaUsuario(params: any): Observable<any> {
    return this.http.get<any>(`${PQA_API}carregaUsuario/`, { params });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  clearLocalStorage(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('nome');
    localStorage.removeItem('perfil');
  }

  hasProcess(processCode: string): boolean {
    const processos: any[] = JSON.parse(localStorage.getItem('processos'));
    return processos.map(processo => processo.codigoProcesso).some(codigo => codigo.trim() === processCode);
  }
}
