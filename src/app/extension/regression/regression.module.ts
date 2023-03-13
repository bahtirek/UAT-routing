import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegressionComponent } from './regression.component';
import { CreateRegressionComponent } from './create-regression/create-regression.component';
import { RegressionDashComponent } from './regression-dash/regression-dash.component';
import { RegressionDetailsComponent } from './regression-details/regression-details.component';

const routes: Routes = [
  { 
    path: '', component: RegressionComponent,
    children: [
      {
        path: 'dashboard', component: CreateRegressionComponent
      },
      {
        path: 'details', component: RegressionDashComponent
      },
      {
        path: 'create', component: RegressionDetailsComponent
      },
    ] 
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RegressionModule { }
