import { Component, OnInit } from '@angular/core';
import { TestCase, TestStepOrder } from 'src/app/interfaces/test-case.interface';
import { TestCaseService } from 'src/app/services/test-case.service';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.less']
})
export class TestCaseDetailsComponent implements OnInit {
  testCase: TestCase;
  testCaseToReview: TestCase;
  importsReviewModalOn: boolean = false;

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
    const testCaseId = this.testCaseService.testCaseDetails.testCaseId;
    console.log(this.testCase);
    this.testCaseService.getTestCaseById(testCaseId).subscribe(
      response => {
        this.testCase = this.testCaseService.setTitleForImportedCase(response);
      },
      error => {
        console.log(error);
        
      }
    )
  }

  onImportsReview(importedCase: TestStepOrder) {
    this.testCaseService.getTestCaseById(importedCase.importedTestCaseId).subscribe(
      response => {
        this.testCaseToReview = response;
        this.toggleModal();
      }
    )
  }

  toggleModal(){
    this.importsReviewModalOn = !this.importsReviewModalOn;
  }
}
