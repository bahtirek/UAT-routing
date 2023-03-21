import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTestCaseComponent } from './create-test-case.component';
import { CaseStepsComponent } from './case-steps/case-steps.component';
import { CaseTitleComponent } from './case-title/case-title.component';
import { MoreButtonMenuComponent } from 'src/app/shared/more-button-menu/more-button-menu.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { CreateStepComponent } from './case-steps/create-step/create-step.component';
import { DeleteStepComponent } from './case-steps/delete-step/delete-step.component';
import { ReviewStepsComponent } from 'src/app/shared/review-steps/review-steps.component';
import { ImportStepsComponent } from './case-steps/import-steps/import-steps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCaseTitleComponent } from './case-title/create-case-title/create-case-title.component';
import { SearchTestCaseModule } from 'src/app/shared/search-test-case/search-test-case.module';


@NgModule({
  declarations: [
    CreateTestCaseComponent,
    CaseStepsComponent,
    CaseTitleComponent,
    MoreButtonMenuComponent,
    ModalComponent,
    CreateStepComponent,
    DeleteStepComponent,
    ReviewStepsComponent,
    ImportStepsComponent,
    CreateCaseTitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchTestCaseModule
  ],
  exports: [
    CreateTestCaseComponent,
  ]
})


export class CreateTestCaseModule { }