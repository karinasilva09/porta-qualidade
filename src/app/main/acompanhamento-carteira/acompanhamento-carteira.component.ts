import { ListaRelease } from '../../shared/models/carteira.model';
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

    constructor(private carteiraService: CarteiraService, public dialog: MatDialog) { }

    ngOnInit() {
        this.carteiraService.filterByName('ANA CRISTINA BRASIL VILLELA')
            .subscribe(res => {
                this.listaRelease = res.listaRelease;
            },
                err => {
                    console.log(err);
                });
    }

    openDialog(nomeRelease: string, nome: string): void{
        this.dialog.open(AcompanhamentoIndicadoresComponent, {
            width: '40%',
            data: {nomeRelease: nomeRelease, nome: nome}
        });
    }

}
