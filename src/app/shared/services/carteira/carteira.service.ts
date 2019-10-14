import { AcompanhamentoCarteira, ListaIndicadores } from '../../models/carteira.model';
import { PQA_API } from './../../../app.api';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = `${PQA_API}`;

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private http: HttpClient) { }

  filterByName(nomeReponsavel: string): Observable<AcompanhamentoCarteira> {
    const url = apiUrl + `acompanhamentoFiltroCarteiraProjeto/?nome=${nomeReponsavel}`;
    return this.http.get<AcompanhamentoCarteira>(url).pipe(
      catchError(this.handleError<AcompanhamentoCarteira>(`filterByName nome=${nomeReponsavel}`))
    );
  }

  filtroIndicadoresPorRelease(nomeReponsavel: string, nomeRelease: string): Observable<ListaIndicadores> {
    const url = apiUrl + `acompanhamentoDetalhesCarteiraProjeto/?nome=${nomeReponsavel}&release=${nomeRelease}`;
    return this.http.get<ListaIndicadores>(url).pipe(
      catchError(this.handleError<ListaIndicadores>(`filtroIndicadoresPorRelease nomeRelease=${nomeRelease}`))
    );
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
