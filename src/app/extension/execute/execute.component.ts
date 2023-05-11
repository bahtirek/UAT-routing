import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Screenshot } from 'src/app/interfaces/screenshot.interface';
import { ScreenshotService } from 'src/app/services/screenshot.service';

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.less']
})
export class ExecuteComponent implements OnInit {

  screenshot: Screenshot = new Screenshot('', '');

  constructor(private screenshotService: ScreenshotService) { }

  ngOnInit(): void {
    //this.router.navigate(['execute'], { relativeTo: this.route, skipLocationChange: true });
  }

  takeScreenshot(){
    this.screenshotService.getScreenshot()
    .then(response => {

      console.log('execute 23',response);

      //this.setScreenshot(response.imgSrc);
    })
    .catch(error => {
      console.log(error);
    });
  }

  setScreenshot(imgSrc: string) {
    this.screenshot.imgSrc = imgSrc;
    this.screenshot.filename = `screenshot-${Date.now()}`;
    this.downloadImage()
  }

  downloadImage(){
    this.screenshotService.screenshotLink('download-image-full', this.screenshot.imgSrc, this.screenshot.filename);
  }
}
