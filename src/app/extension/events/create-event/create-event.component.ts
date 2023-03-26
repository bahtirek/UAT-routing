import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Environment } from 'src/app/interfaces/environment.interface';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.less']
})
export class CreateEventComponent implements OnInit {

  onCreate: boolean = false;
  event: Event = {title: 'lorem ipsum'};

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    /* if(!this.eventService.event?.eventId){
      this.caseChoiceModalOn = true;
    } else {
      this.event = this.eventService.getEvent();
    } */
    this.eventService.eventSource.pipe(take(2)).subscribe((event: Event) => {
      this.event = event;
    })
  }

  saveDescription(event: String){

  }

  saveEnvironment(event: Environment){

  }

}
