import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.less']
})
export class EventsComponent implements OnInit {

  private sub = this.router.events
    .pipe(
      filter(event => event instanceof NavigationStart),
      map(event => event as NavigationStart),  // appease typescript
      filter(event => event.url.includes('/events') )
    )
    .subscribe(
      event => this.setBreadcrumb(event)
    );

  pageTitle: string = 'Events / Dashboard';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.navigate(['create'], { relativeTo: this.route, skipLocationChange: true });
  }

  setBreadcrumb(event: NavigationStart): void {
    let url = event.url.replace('-', ' ').substring(1).split('/');
    if(url.length > 1) {
      this.pageTitle = `${url[0]} / ${url[url.length-1]}`
    } else {
      this.pageTitle = `${url[0]} / Dashboard`;
      this.router.navigate(['dashboard'], { relativeTo: this.route, skipLocationChange: true });
    }
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
