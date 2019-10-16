import { ListaRelease } from './../../shared/models/carteira.model';
import { CarteiraService } from '../../shared/services/carteira/carteira.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AcompanhamentoIndicadoresComponent } from '../acompanhamento-indicadores/acompanhamento-indicadores.component';

@Component({
    selector: 'app-acompanhamento-carteira',
    templateUrl: './acompanhamento-carteira.component.html',
    styleUrls: ['./acompanhamento-carteira.component.scss']
})
export class AcompanhamentoCarteiraComponent implements OnInit {

    listaRelease: ListaRelease[];
    listaReleaseFiltro: ListaRelease[];

    releaseFiltradaPorRelease: ListaRelease[];
    releaseFiltrada: ListaRelease[];

    dataAtual = new Date();

    selected = "todas";

    mesAtual = this.dataAtual.getMonth() + 1;
    anoAtual = this.dataAtual.getFullYear();
    releaseAtual: string = this.anoAtual + '/' + this.mesAtual;
    isReleaseAtual: boolean;
    cor: string;

    constructor(private carteiraService: CarteiraService, public dialog: MatDialog) { }

    ngOnInit() {
        this.carteiraService.filterByName('ANA CRISTINA BRASIL VILLELA')
            .subscribe(res => {
                this.listaReleaseFiltro = res.listaRelease;
                this.listaRelease = res.listaRelease;
                
                this.releaseFiltradaPorRelease = this.listaRelease.filter((nomeRelease => {
                    this.isReleaseAtual = nomeRelease.nome === this.releaseAtual;
                }));
            },
                err => {
                    console.log(err);
                });
    }

    filtroPorRelease($event): void {
        const release: string = $event.value;
        if(release === 'todas'){
            this.listaReleaseFiltro = this.listaRelease;
        } else {
            this.releaseFiltradaPorRelease = this.listaRelease.filter((nomeRelease) => { 
                return nomeRelease.nome === release;
            });

            this.listaReleaseFiltro = this.releaseFiltradaPorRelease;
        }
    }

    openDialog(nomeRelease: string, nome: string): void {

        this.dialog.open(AcompanhamentoIndicadoresComponent, {
            width: '50%',
            data: { nomeRelease: nomeRelease, nome: nome }
        });
    }

}
