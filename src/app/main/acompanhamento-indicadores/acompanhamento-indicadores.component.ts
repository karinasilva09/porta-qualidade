import { Indicador, ListaIndicadores } from './../../shared/models/carteira.model';
import { CarteiraService } from './../../shared/services/carteira/carteira.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

export interface DialogData {
    nomeRelease: string;
    nome: string;
}

@Component({
    selector: 'app-acompanhamento-indicadores',
    templateUrl: './acompanhamento-indicadores.component.html',
    styleUrls: ['./acompanhamento-indicadores.component.scss']
})
export class AcompanhamentoIndicadoresComponent implements OnInit {

    nomeRelease: string;
    nome: string;

    displayedColumns: string[] = ['nomeIndicador', 'valor'];
    dataSource: Indicador[];

    constructor(public dialogRef: MatDialogRef<AcompanhamentoIndicadoresComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData, private carteiraService: CarteiraService) { }

    ngOnInit() {
        this.carteiraService.filtroIndicadoresPorRelease(this.data.nome, this.data.nomeRelease)
        .subscribe(res => {
          this.dataSource = res.listaIndicadores;
        },
          err => {
            console.log(err);
          });
    }

}
