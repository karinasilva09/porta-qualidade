import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcompanhamentoCarteiraComponent } from './main/acompanhamento-carteira/acompanhamento-carteira.component';
import { MonitorDefeitosComponent } from './main/monitor-defeitos/monitor-defeitos.component';
import { DetalhesDefeitosComponent } from './main/detalhes-defeitos/detalhes-defeitos.component';
import { GestaoTesteComponent } from './main/gestao-teste/gestao-teste.component';

const routes: Routes = [
    { path: 'acompanhamentocarteira', component: AcompanhamentoCarteiraComponent },
    { path: 'defeitos/monitor-defeito', component: MonitorDefeitosComponent },
    { path: 'detalhedefeito', component: DetalhesDefeitosComponent },
    { path: 'gestaoteste', component: GestaoTesteComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
