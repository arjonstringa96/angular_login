import { NgModule } from '@angular/core';
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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
