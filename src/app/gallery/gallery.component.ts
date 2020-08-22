import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import FileWithURL from '../models/FileWithURL';
import { ImageCompressionService } from '../services/image-compression.service';
const DOUBLECLICK_THRESHHOLD = 200;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images = {};
  selection = {};
  clickTimer: {[imgId: number]: number}= {};
  imageCounter = 0;
  lastClick = 0;

  constructor(
    public imageCompressionService: ImageCompressionService,
    private route: Router,
  ) {
    console.log('gallery.component constructor');
  }

  clickTest() {
    let now = new Date().valueOf();
    console.log(`current time: ${now}, time between last and now: ${now-this.lastClick}`);
    this.lastClick = now;
  }

  handleImgFrameClick(imgId) {
    let now = new Date().valueOf();
    let last = this.clickTimer[imgId];
    // is this a double click event? 
    if (last && now-last < DOUBLECLICK_THRESHHOLD) {
      this.route.navigateByUrl('/edit/' + imgId);
    }
    this.clickTimer[imgId] = now;
    console.log("selected img", imgId)
    this.selection[imgId] = !this.selection[imgId];
  }

  handleFileSelect() {
    const input = document.getElementById('fileselector') as HTMLInputElement;
    if (input.files.length < 1)
      return;

    for (let i = 0; i < input.files.length; i++) {
      this.imageCompressionService.addImg(input.files[i]);
    }
  }

  ngOnInit(): void {
    console.log('gallery.component OnInit');
  }
}
