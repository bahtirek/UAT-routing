import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDeatilsComponent } from './event-deatils/event-deatils.component';
import { EventsDashComponent } from './events-dash/events-dash.component';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
  { 
    path: '', component: EventsComponent,
    children: [
      {
        path: 'dashboard', component: CreateEventComponent
      },
      {
        path: 'details', component: EventDeatilsComponent
      },
      {
        path: 'create', component: EventsDashComponent
      },
    ] 
  }
];

@NgModule({
  declarations: [
    CreateEventComponent,
    EventDeatilsComponent,
    EventsDashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EventsModule { }
