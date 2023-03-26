import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event-title',
  templateUrl: './create-event-title.component.html',
  styleUrls: ['./create-event-title.component.less']
})
export class CreateEventTitleComponent implements OnInit {

  error: string[] = [];
  formError: FormError = {};
  submitInProgress: boolean = false; 

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  @Input() event: Event;

  @Output() cancel = new EventEmitter<null>();
  @Output() onEventTitleSaved = new EventEmitter<Event>();

  onSaveEvent(){
    this.formError.title = [];
    this.submitInProgress = true;
    if(this.event && this.event.title) {
      if(this.event.eventId) {
        this.updateEvent();
      } else {
        this.addEvent();
      }
    } else {
      this.formError.title.push('Field is required');
      this.submitInProgress = false;
    }
  }

  updateEvent() {
    /* this.eventService.updateEvent(this.event).subscribe(
      response => {
        console.log(response);
        this.submitInProgress = false;
        this.oneventTitleSaved.emit(response);
        //this.eventService.setevent(response)
      },
      error => {
        this.submitInProgress = false;
      }
    ) */
    this.onEventTitleSaved.emit({eventId: 1, title: this.event.title});
  }

  addEvent(){
    /* this.eventService.addEvent(this.event).subscribe(
      response => {
        console.log(response);
        this.submitInProgress = false;
        this.oneventTitleSaved.emit(response);
        //this.eventService.setevent(response)
      },
      error => {
        this.submitInProgress = false;
      }
    ) */
    this.onEventTitleSaved.emit({eventId: 1, title: this.event.title});
  }

  onCancel(){
    this.event = {};
    this.cancel.emit();
  }
}
export interface FormError {
  title?: string[]
}

