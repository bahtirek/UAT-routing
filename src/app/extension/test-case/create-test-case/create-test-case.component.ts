import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { TestCase } from 'src/app/interfaces/test-case.interface';
import { TestCaseService } from 'src/app/services/test-case.service';

@Component({
  selector: 'app-create-test-case',
  templateUrl: './create-test-case.component.html',
  styleUrls: ['./create-test-case.component.less']
})
export class CreateTestCaseComponent implements OnInit {

  testCase: TestCase = {
    /* "testCaseId": 9,
    "title": "dfgdfg",
    "createdBy": null,
    "deleted": false, */
};
  scrollTop: any;
  caseChoiceModalOn: boolean = false;
  submitInProgress: boolean = false;
  onCreate: boolean = false;

  constructor(private testCaseService: TestCaseService, private router: Router) { }

  ngOnInit(): void {
    if(!this.testCaseService.testCaseDetails?.testCaseId){
      this.onCreate = true;
    } else {
      this.testCase = this.testCaseService.getTestCase();
    }
    this.testCaseService.testCaseSource.pipe(take(2)).subscribe((testCase: TestCase) => {
      this.testCase = testCase;
    })
  }

  onCreateClick(){
    //this.toggleModal();
    this.onCreate = true;
  }

  onContinue(){
    this.submitInProgress = true;
    this.testCaseService.getTestCaseById(3).subscribe(
      response => {
        this.testCaseService.setTestCase(response)
        this.toggleModal();
        this.submitInProgress = false;
      },
      error => {
        this.submitInProgress = false;
      }
    )
  }

  closeModal(){
    this.caseChoiceModalOn = false;
    this.router.navigate(['./test-case/dashboard'], { skipLocationChange: true });
  }
  toggleModal(){
    this.caseChoiceModalOn = !this.caseChoiceModalOn;
  }

}
