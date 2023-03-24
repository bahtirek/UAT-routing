import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Event, ServerResponse } from '../interfaces/event.interface';
import { api } from '../data/api-url';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  event: Event = {};
  url = api.url;

  constructor(private http: HttpClient) { }

  eventSource = new Subject<Event>();

  pushEvent(event: Event){
    this.eventSource.next(event)
  }

  searchEvent(event: string, includeDeleted: number) {
    const params = new HttpParams()
      .set('title', event)
      .set('includeDeleted', includeDeleted);
      return this.http.get<ServerResponse<Event[]>>(this.url + '/test-case-search', {params})
      .pipe(map(response => response?.result))
  }
}
