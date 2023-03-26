import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.less']
})
export class CreateEventComponent implements OnInit {

  onCreate: boolean = true;
  event: Event = {};

  constructor() { }

  ngOnInit(): void {
  }

}
