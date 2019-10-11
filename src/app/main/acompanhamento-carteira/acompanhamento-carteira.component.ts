import { ListaIndicadores } from './../../shared/models/carteira.model';
import { FormControl } from '@angular/forms';
import { CarteiraService } from './../../shared/services/carteira/carteira.service';
import { ListaRelease, ListaIndicadores } from '../../shared/models/carteira.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { getMeses } from 'app/shared/utils/meses.util';

@Component({
  selector: 'app-acompanhamento-carteira',
  templateUrl: './acompanhamento-carteira.component.html',
  styleUrls: ['./acompanhamento-carteira.component.scss']
})
export class AcompanhamentoCarteiraComponent implements OnInit {


  selected = new FormControl(7);

  listaRelease: ListaRelease[];
  listaIndicadores: ListaIndicadores[];

  release: ListaRelease;

  mesAtual = new Date().getMonth();
  anoAtual = new Date().getFullYear();

  meses: any[] = getMeses();

  displayedColumns: string[] = ['nome', 'valor'];

  dataSource: ListaIndicadores[];

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  releaseAtual: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private carteiraService: CarteiraService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.carteiraService.filterByName('ANA CRISTINA BRASIL VILLELA')
      .subscribe(res => {
        this.listaRelease = res.listaRelease;
      },
        err => {
          console.log(err);
        });

  }

  getListaDeIndicadoresPorRelease($event): void {
    this.release = this.listaRelease[$event];
    this.carteiraService.filtroIndicadoresPorRelease('ANA CRISTINA BRASIL VILLELA', this.release.nome)
      .subscribe(res => {
        this.dataSource = res.listaIndicadores;
        Array.from(this.dataSource);
      },
        err => {
          console.log(err);
        });
  }

  toggleBackground(): void {
    this.background = this.background ? '' : 'primary';
  }

  addLink(): void {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  filtroPorRelease(): void {
    // Filter
    if (this.releaseAtual === 'todas') {
      console.log('TODOS');
    } else {
      console.log('OUTROS');
    }
  }

}
