import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  private sub = this.router.events
  .pipe(
    filter(event => event instanceof NavigationStart),
    map(event => event as NavigationStart),  // appease typescript
    filter(event => event.url.includes('/settings') )
  )
  .subscribe(
    event => this.setBreadcrumb(event)
  );

  pageTitle: string = 'Settings / Profile';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.navigate(['profile'], { relativeTo: this.route, skipLocationChange: true });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setBreadcrumb(event: NavigationStart): void {
    let url = event.url.replace('-', ' ').substring(1).split('/');
    
    if(url.length > 1) {
      this.pageTitle = `${url[0]} / ${url[url.length-1]}`
    } else {
      this.pageTitle = `${url[0]} / Profile`;
      this.router.navigate(['profile'], { relativeTo: this.route, skipLocationChange: true });
    }
  }
 
}
