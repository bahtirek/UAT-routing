import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExecuteComponent } from './execute.component';

const routes: Routes = [
  { 
    path: '', component: ExecuteComponent 
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ExecuteModule { }
