import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestCaseComponent } from './test-case.component';
import { TestCaseDashComponent } from './test-case-dash/test-case-dash.component';
import { TestCaseDetailsComponent } from './test-case-details/test-case-details.component';
import { CreateTestCaseComponent } from './create-test-case/create-test-case.component';
import { CaseStepsComponent } from './create-test-case/case-steps/case-steps.component';
import { CaseTitleComponent } from './create-test-case/case-title/case-title.component';
import { MoreButtonMenuComponent } from 'src/app/shared/more-button-menu/more-button-menu.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { CreateStepComponent } from './create-test-case/case-steps/create-step/create-step.component';
import { DeleteStepComponent } from './create-test-case/case-steps/delete-step/delete-step.component';
import { ReviewStepsComponent } from 'src/app/shared/review-steps/review-steps.component';
import { ImportStepsComponent } from './create-test-case/case-steps/import-steps/import-steps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchTestCaseComponent } from 'src/app/shared/search-test-case/search-test-case.component';
import { CreateCaseTitleComponent } from './create-test-case/case-title/create-case-title/create-case-title.component';
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
