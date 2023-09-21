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
import { HomeComponent } from '../layout/home/home.component';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';
import { AnalysisComponent } from '../layout/analysis/analysis.component';
import { ComparisonComponent } from '../layout/comparison/comparison.component';
import { QuickviewComponent } from '../layout/quickview/quickview.component';


import { MachinelearningComponent } from '../layout/machinelearning/machinelearning.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'machinelearning' , component:MachinelearningComponent},
  {path: 'comparison' , component:ComparisonComponent},
  {path: 'quickview' , component:QuickviewComponent},

  {path: 'analysis' , component:AnalysisComponent},
  {path: 'dashboard', component:DashboardComponent},];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
