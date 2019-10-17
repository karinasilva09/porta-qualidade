import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'acompanhamento-carteira',
        title: 'Acompanhamento de Carteira',
        type: 'item',
        icon: 'work',
        url: '/acompanhamentocarteira'
    },
    {
        id: 'defeitos',
        title: 'Defeitos',
        type: 'collapsable',
        icon: 'error',
        children: [
            {
                id: 'monito-defeito',
                title: 'Monitor de Defeitos',
                type: 'item',
                url: '/defeitos/monitor-defeitos'
            }
        ]
    },
    {
        id: 'gestao-teste',
        title: 'Gestão de Teste',
        type: 'collapsable',
        icon: 'data_usage',
        children: [
            {
                id: 'status-gerencial-teste',
                title: 'Status Gerencial de Teste',
                type: 'item',
                url: 'gestaoteste'
            }
        ]
    }
];
