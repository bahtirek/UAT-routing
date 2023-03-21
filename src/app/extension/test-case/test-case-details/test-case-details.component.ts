import { Component, OnInit } from '@angular/core';
import { TestCase } from 'src/app/interfaces/test-case.interface';
import { TestCaseService } from 'src/app/services/test-case.service';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.less']
})
export class TestCaseDetailsComponent implements OnInit {
  testCase: TestCase;

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
    this.testCase = this.testCaseService.testCaseDetails;
    console.log(this.testCase);
    
  }

}
