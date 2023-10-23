import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NebulaComponent } from './nebula/nebula.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidenavComponent } from '../layout/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from '../layout/home/home.component';
import { AnalysisComponent } from '../layout/analysis/analysis.component';
import { QuickviewComponent } from '../layout/quickview/quickview.component';
import { MachinelearningComponent } from '../layout/machinelearning/machinelearning.component';
import { ComparisonComponent } from '../layout/comparison/comparison.component';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { KpiProvaComponent } from './kpi-prova/kpi-prova.component';
import { FilterComponent } from './filter/filter.component';
import { IdComponent } from './periodo/periodo.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MediaOrariaComponent } from './media-oraria/media-oraria.component';
import { MediaSettimanaleComponent } from './media-settimanale/media-settimanale.component';
import { ConfrontoIngressiComponent } from './confronto-ingressi/confronto-ingressi.component';
import { ConfrontoContapersoneComponent } from './confronto-contapersone/confronto-contapersone.component';
import { PeriodoComparison1Component } from './periodo-comparison1/periodo-comparison1.component';
import { PeriodoComparison2Component } from './periodo-comparison2/periodo-comparison2.component';
import { PeriodoComparison3Component } from './periodo-comparison3/periodo-comparison3.component';
import { PeriodoComparison4Component } from './periodo-comparison4/periodo-comparison4.component';
import { PeriodoComparison5Component } from './periodo-comparison5/periodo-comparison5.component';
import { PeriodoComparison6Component } from './periodo-comparison6/periodo-comparison6.component';
import { KpiSodisfazione1Component } from './kpi-sodisfazione1/kpi-sodisfazione1.component';
import { ComparisonRepartiComponent } from '../layout/comparison-reparti/comparison-reparti.component';
import { TurniPersonaliComponent } from '../layout/turni-personali/turni-personali.component';
import { ConfrontoMonteOreComponent } from '../app/confronto-monte-ore/confronto-monte-ore.component';
import { ForecastRepartiComponent } from './forecast-reparti/forecast-reparti.component';
import { ProvaperkpiComponent } from './provaperkpi/provaperkpi.component';
import { KpiSodisfazione2Component } from './kpi-sodisfazione2/kpi-sodisfazione2.component';
import { KpiEconomici1Component } from './kpi-economici1/kpi-economici1.component';
import { KpiEconomici2Component } from './kpi-economici2/kpi-economici2.component';
import { PuntiEsperienzaKPIComponent } from './punti-esperienza-kpi/punti-esperienza-kpi.component';
import { PuntiEsperienzaComparison1Component } from './punti-esperienza-comparison1/punti-esperienza-comparison1.component';
import { PuntiEsperienzaComparison2Component } from './punti-esperienza-comparison2/punti-esperienza-comparison2.component';
import {initServicesFactory} from '../app/initServiceFactory'
import {Globals} from '../app/globals';
import { ComparisonRepartiGraph1Component } from './comparisonRepartiGraphs/comparison-reparti-graph1/comparison-reparti-graph1.component';
import { ComparisonRepartiGraph2Component } from './comparisonRepartiGraphs/comparison-reparti-graph2/comparison-reparti-graph2.component';
import { ComparisonRepartiGraph3Component } from './comparisonRepartiGraphs/comparison-reparti-graph3/comparison-reparti-graph3.component';
import { ComparisonRepartiGraph4Component } from './comparisonRepartiGraphs/comparison-reparti-graph4/comparison-reparti-graph4.component';
import { ComparisonRepartiGraph5Component } from './comparisonRepartiGraphs/comparison-reparti-graph5/comparison-reparti-graph5.component';
import { ComparisonRepartiGraph6Component } from './comparisonRepartiGraphs/comparison-reparti-graph6/comparison-reparti-graph6.component';
import { ComparisonRepartiGraph7Component } from './comparisonRepartiGraphs/comparison-reparti-graph7/comparison-reparti-graph7.component';
import { ComparisonRepartiGraph8Component } from './comparisonRepartiGraphs/comparison-reparti-graph8/comparison-reparti-graph8.component';
import { ComparisonRepartiGraph9Component } from './comparisonRepartiGraphs/comparison-reparti-graph9/comparison-reparti-graph9.component'
// import { AnalysiscompComponent } from './analysiscomp/analysiscomp.component';
// import {DatepickerModule} from '../../projects/datepicker/src/lib/datepicker.module';
// import{DateRangePicker} from '../../projects/SenseDateRangePicker-master/src/lib/daterangepicker.js'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NebulaComponent,
    LinechartComponent,
    BarchartComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    AnalysisComponent,
    QuickviewComponent,
    MachinelearningComponent,
    ComparisonComponent,
    DashboardComponent,
    KpiProvaComponent,
    FilterComponent,
    IdComponent,
    MediaOrariaComponent,
    MediaSettimanaleComponent,
    ConfrontoIngressiComponent,
    ConfrontoContapersoneComponent,
    PeriodoComparison1Component,
    PeriodoComparison2Component,
    PeriodoComparison3Component,
    PeriodoComparison4Component,
    PeriodoComparison5Component,
    PeriodoComparison6Component,
    KpiSodisfazione1Component,
    ComparisonRepartiComponent,
    TurniPersonaliComponent,
    ConfrontoMonteOreComponent,
    ForecastRepartiComponent,
    ProvaperkpiComponent,
    KpiSodisfazione2Component,
    KpiEconomici1Component,
    KpiEconomici2Component,
    PuntiEsperienzaKPIComponent,
    PuntiEsperienzaComparison1Component,
    PuntiEsperienzaComparison2Component,
    ComparisonRepartiGraph1Component,
    ComparisonRepartiGraph2Component,
    ComparisonRepartiGraph3Component,
    ComparisonRepartiGraph4Component,
    ComparisonRepartiGraph5Component,
    ComparisonRepartiGraph6Component,
    ComparisonRepartiGraph7Component,
    ComparisonRepartiGraph8Component,
    ComparisonRepartiGraph9Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbNavModule,
    TabsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},{
    provide: APP_INITIALIZER,
    useFactory: initServicesFactory ,  //(config: Globals) => () => config.connection()
    deps: [Globals],
    multi : true,
  },],
   bootstrap: [AppComponent]
})
export class AppModule { }


