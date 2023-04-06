import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../shared/loader/loader.service';
import { ToasterService } from '../shared/toaster/toaster.service';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.less']
})
export class ExtensionComponent implements OnInit {

  loading = this.loader.isLoading;

  constructor(private router: Router, private route: ActivatedRoute, private loader: LoaderService) { }

  ngOnInit(): void {
    this.router.navigate(['test-case'], { relativeTo: this.route, skipLocationChange: true });
    console.log(this.route.snapshot.url);
  }
}
