import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDescriptionComponent } from './event-description/event-description.component';
import { EventTitleComponent } from './event-title/event-title.component';
import { EventEnvironmentComponent } from './event-environment/event-environment.component';
import { EventMembersComponent } from './event-members/event-members.component';
import { CreateEventComponent } from './create-event.component';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { MoreButtonMenuModule } from 'src/app/shared/more-button-menu/more-button-menu.module';
import { CreateEventTitleComponent } from './event-title/create-event-title/create-event-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventDescriptionComponent } from './event-description/create-event-description/create-event-description.component';
import { EnvironmentChoiceModule } from 'src/app/shared/environment-choice/environment-choice.module';
import { EventParticipantsComponent } from './event-participants/event-participants.component';
import { AddParticipantsComponent } from './event-participants/add-participants/add-participants.component';
import { ParticipantsDetailsComponent } from './event-participants/participants-details/participants-details.component';



@NgModule({
  declarations: [
    EventDescriptionComponent,
    EventTitleComponent,
    EventEnvironmentComponent,
    EventMembersComponent,
    CreateEventComponent,
    CreateEventTitleComponent,
    CreateEventDescriptionComponent,
    EventParticipantsComponent,
    AddParticipantsComponent,
    ParticipantsDetailsComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    MoreButtonMenuModule,
    FormsModule,
    EnvironmentChoiceModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateEventComponent
  ]
})
export class CreateEventModule { }
