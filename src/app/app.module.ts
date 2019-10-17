import { CookieService } from 'ngx-cookie-service';
import { AdminGuard } from './shared/guards/auth.guards';
import { MatDialogModule } from '@angular/material/dialog';
import { CarteiraService } from './shared/services/carteira/carteira.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FuseWidgetModule } from './../@fuse/components/widget/widget.module';
import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

import {
    MatTabsModule, MatTableModule, MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule
} from '@angular/material';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { AcompanhamentoCarteiraComponent } from './main/acompanhamento-carteira/acompanhamento-carteira.component';
import { AcompanhamentoIndicadoresComponent } from './main/acompanhamento-indicadores/acompanhamento-indicadores.component';
import { DetalhesDefeitosComponent } from './main/detalhes-defeitos/detalhes-defeitos.component';
import { MonitorDefeitosComponent } from './main/monitor-defeitos/monitor-defeitos.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CookieOptions } from 'angular2-cookie/services/base-cookie-options';
import { HttpConfigInterceptor } from './shared/interceptor/httpconfig.interceptor';
import { GestaoTesteComponent } from './main/gestao-teste/gestao-teste.component';


@NgModule({
    declarations: [
        AppComponent,
        AcompanhamentoCarteiraComponent,
        AcompanhamentoIndicadoresComponent,
        DetalhesDefeitosComponent,
        MonitorDefeitosComponent,
        GestaoTesteComponent
    ],
    imports: [
        AppRoutingModule,

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

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
    providers: [
        AdminGuard,
        CarteiraService,
        CookieService,
        DatePipe,
        { provide: CookieOptions, useValue: {} },
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: LOCALE_ID, useValue: 'pt-BR' }
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [AcompanhamentoIndicadoresComponent]
})
export class AppModule {
}
