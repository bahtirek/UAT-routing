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
import { FormsModule } from '@angular/forms';
import { CreateEventDescriptionComponent } from './event-description/create-event-description/create-event-description.component';
import { EnvironmentChoiceModule } from 'src/app/shared/environment-choice/environment-choice.module';



@NgModule({
  declarations: [
    EventDescriptionComponent,
    EventTitleComponent,
    EventEnvironmentComponent,
    EventMembersComponent,
    CreateEventComponent,
    CreateEventTitleComponent,
    CreateEventDescriptionComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    MoreButtonMenuModule,
    FormsModule,
    EnvironmentChoiceModule
  ],
  exports: [
    CreateEventComponent
  ]
})
export class CreateEventModule { }
