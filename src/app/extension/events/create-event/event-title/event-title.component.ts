import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-title',
  templateUrl: './event-title.component.html',
  styleUrls: ['./event-title.component.less']
})
export class EventTitleComponent implements OnInit {

  createEvent: boolean;
  event: Event;
  eventToEdit: Event = {};
  isEventTitleModalOn: boolean;
  actions: MoreButtonAction[] = [
    {
      name: 'Edit',
      action: 'edit',
      display: true
    },
  ]

   //opening create ttitle by default
  @Input() set onCreate(value: boolean){
    this.isEventTitleModalOn = value;
    this.createEvent = value;
  }
  @Input() set eventProp(value: Event) {
    console.log(value);
    
    this.event = value;
  }

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreateCancel(){
    if (this.eventToEdit?.title) {
      this.toggleAddeventModal();
    } else {
      this.router.navigate(['./event/dashboard'], { skipLocationChange: true });
    }
  }

  onEventEdit(){
    this.eventToEdit = {...this.event};
    this.toggleAddeventModal();
  }
  
  onEventTitleSaved(event: Event){
    this.eventService.setEvent(event);
    this.event = event;
    this.toggleAddeventModal();
  }

  openeventModal(){
    this.toggleAddeventModal()
  }

  toggleAddeventModal(){
    this.isEventTitleModalOn = !this.isEventTitleModalOn;
  }

  onAction(event: string){
    switch (event) {
      case 'edit': this.onEventEdit(); break;
    }
  }

}
