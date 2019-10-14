export class AcompanhamentoCarteira {
    nome: string;
    listaRelease: ListaRelease[];
}

export class ListaRelease {
    nome: string;
    total: number;
}

export class ListaIndicadores {
    listaIndicadores: Indicador[];
}

export class Indicador {
    nome: string;
    valor: string;  
}
