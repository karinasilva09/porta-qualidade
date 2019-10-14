import { MatDialogModule } from '@angular/material/dialog';
import { CarteiraService } from './shared/services/carteira/carteira.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FuseWidgetModule } from './../@fuse/components/widget/widget.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';

import { MatTabsModule, MatTableModule, MatPaginatorModule,
MatInputModule,
MatFormFieldModule, 
MatGridListModule} from '@angular/material';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { AcompanhamentoCarteiraComponent } from './main/acompanhamento-carteira/acompanhamento-carteira.component';
import { AcompanhamentoIndicadoresComponent } from './main/acompanhamento-indicadores/acompanhamento-indicadores.component';

const appRoutes: Routes = [
    {path: 'acompanhamento-carteira', component: AcompanhamentoCarteiraComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        AcompanhamentoCarteiraComponent,
        AcompanhamentoIndicadoresComponent
    ],
    imports : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatDialogModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        FuseDemoModule,
        FuseWidgetModule,

        // App modules
        LayoutModule,
        SampleModule,

        FormsModule
    ],
    providers   :[
        CarteiraService
    ],
    bootstrap   : [
        AppComponent
    ],
    entryComponents: [AcompanhamentoIndicadoresComponent]
})
export class AppModule
{
}
