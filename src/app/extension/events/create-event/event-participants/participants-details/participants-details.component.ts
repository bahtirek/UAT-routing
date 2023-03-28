import { Component, Input, OnInit } from '@angular/core';
import { Tester } from 'src/app/interfaces/tester.interface';

@Component({
  selector: 'app-participants-details',
  templateUrl: './participants-details.component.html',
  styleUrls: ['./participants-details.component.less']
})
export class ParticipantsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tester: Tester;

}
