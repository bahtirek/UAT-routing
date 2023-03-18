import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestCaseComponent } from './test-case.component';
import { TestCaseDashComponent } from './test-case-dash/test-case-dash.component';
import { TestCaseDetailsComponent } from './test-case-details/test-case-details.component';
import { CreateTestCaseComponent } from './create-test-case/create-test-case.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTestCaseModule } from './create-test-case/create-test-case.module';

const routes: Routes = [
  { 
    path: '', component: TestCaseComponent,
    children: [
      {
        path: 'dashboard', component: TestCaseDashComponent
      },
      {
        path: 'details', component: TestCaseDetailsComponent
      },
      {
        path: 'create', component: CreateTestCaseComponent
      },
    ] 
  }
];

@NgModule({
  declarations: [
    TestCaseComponent,
    TestCaseDashComponent,
    TestCaseDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateTestCaseModule,
    RouterModule.forChild(routes),
  ]
})


export class TestCaseModule { }
