import { ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './shared/loader/loader.service';

@Component({
  selector: 'ez-bug-ext',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  loading = this.loader.isLoading;

  constructor(private loader: LoaderService, private cd: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
}
