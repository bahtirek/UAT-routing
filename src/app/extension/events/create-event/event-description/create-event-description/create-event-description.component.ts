import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event-description',
  templateUrl: './create-event-description.component.html',
  styleUrls: ['./create-event-description.component.less']
})
export class CreateEventDescriptionComponent implements OnInit {

  error: string[] = [];
  formError: FormError = {};
  submitInProgress: boolean = false; 

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  @Input() description: string;

  @Output() cancel = new EventEmitter<null>();
  @Output() descriptionEmit = new EventEmitter<string>();

  onSaveDescription(){
    this.descriptionEmit.emit(this.description)
    this.description = '';
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
    this.descriptionEmit.emit(this.description);
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
    this.descriptionEmit.emit(this.description);
  }

  onCancel(){
    this.description = '';
    this.cancel.emit();
  }

}
export interface FormError {
  title?: string[]
}