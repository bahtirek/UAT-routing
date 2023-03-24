import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDeatilsComponent } from './event-deatils/event-deatils.component';
import { EventsDashComponent } from './events-dash/events-dash.component';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { SearchEventModule } from 'src/app/shared/search-event/search-event.module';

const routes: Routes = [
  { 
    path: '', component: EventsComponent,
    children: [
      {
        path: 'create', component: CreateEventComponent
      },
      {
        path: 'details', component: EventDeatilsComponent
      },
      {
        path: 'dashboard', component: EventsDashComponent
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
    SearchEventModule,
    RouterModule.forChild(routes),
  ]
})
export class EventsModule { }
