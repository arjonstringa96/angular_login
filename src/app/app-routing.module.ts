// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '../layout/home/home.component';
// import { DashboardComponent } from '../layout/dashboard/dashboard.component';
import { AnalysisComponent } from '../layout/analysis/analysis.component';
import { ComparisonComponent } from '../layout/comparison/comparison.component';
import { QuickviewComponent } from '../layout/quickview/quickview.component';
import {TurniPersonaliComponent} from '../layout/turni-personali/turni-personali.component'
import {ComparisonRepartiComponent} from '../layout/comparison-reparti/comparison-reparti.component';

import { MachinelearningComponent } from '../layout/machinelearning/machinelearning.component';
const routes: Routes = [
  {path: '', redirectTo: 'quickview', pathMatch: 'full'}, 
  {path: 'quickview' , component:QuickviewComponent},
  {path: 'analysis' , component:AnalysisComponent},
  {path: 'comparison' , component:ComparisonComponent},
  {path: 'comparisonReparti' , component:ComparisonRepartiComponent},
  {path: 'turniPersonali' , component:TurniPersonaliComponent},

  {path: 'machinelearning' , component:MachinelearningComponent},
  // {path: 'home', component:HomeComponent},

  // {path: 'dashboard', component:DashboardComponent},
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
