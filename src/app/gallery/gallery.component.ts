import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import FileWithURL from '../models/FileWithURL';
import { ImageCompressionService } from '../services/image-compression.service';
import Selection from '../libs/selection';
import * as JSZip from 'jszip';
import { download } from '../helpers/files';

const DOUBLECLICK_THRESHHOLD = 200;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images = {};
  selected = {};
  clickTimer: {[imgId: number]: number}= {};
  imageCounter = 0;
  lastClick = 0;
  quality = 100;
  busy = false;

  constructor(
    public imgService: ImageCompressionService,
    private route: Router,
  ) {
    console.log('gallery.component constructor');
  }

  clickTest() {
    let now = new Date().valueOf();
    console.log(`current time: ${now}, time between last and now: ${now-this.lastClick}`);
    this.lastClick = now;
  }

  handleApplyQuality() {
    if (this.busy)
      return;

    this.busy = true;
    let imgsToApply = Object.keys(this.selected).filter(id => this.selected[id]);
    imgsToApply.map(id => this.imgService.compressImg(Number(id), this.quality));
    Promise.all(imgsToApply)
      .then(() => {
        this.busy = false;
      });
  }

  handleImgFrameClick(imgId: number) {
    console.log('handleImgFrameClick:', imgId);
    let now = new Date().valueOf();
    let last = this.clickTimer[imgId];
    // is this a double click event? 
    if (last && now-last < DOUBLECLICK_THRESHHOLD) {
      this.route.navigateByUrl('/edit/' + imgId);
    }
    this.clickTimer[imgId] = now;
  }

  handleFileSelect() {
    const input = document.getElementById('fileselector') as HTMLInputElement;
    if (input.files.length < 1)
      return;

    for (let i = 0; i < input.files.length; i++) {
      let file = input.files[i];
      if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/tiff')
        this.imgService.addImg(input.files[i]);
    }
  }

  handleDownload(imgIds: number[]) {
    let zip = new JSZip();
    imgIds
      .forEach(id => {
        let img = this.imgService.getImg(id);
        zip.file(img.original.f.name, img.compressed.f);
      });
    zip.generateAsync({type:"blob"})
      .then((content) => {
        download(content, 'desized.zip');
      });
  }

  get selectedImgs() : number[] {
    return Object.keys(this.selected).map(id => Number(id));
  }

  get allImgs() : number[] {
    return this.imgService.getImgIds();
  }

  aggrigateFileSize(ids : number[], version : 'original' | 'compressed') {
    return ids.map(id => this.imgService.getImg(id)[version].f.size).reduce((accu, s) => {
      return accu + s;
    }, 0);
  };

  ngOnInit(): void {
    console.log('gallery.component OnInit');
    let selection = Selection({
      class: 'selection',
      frame: document,
      selectables: ['.img-frame'],
      boundaries: ['.img-container']
    }).on('start', ({inst, selected, oe}) => {
      // Remove class if the user isn't pressing the control key or ⌘ key
      if (!oe.ctrlKey && !oe.metaKey) {
        this.selected = {};
        // Clear previous selection
        inst.clearSelection();
      }
    }).on('move', ({changed: {removed, added}}) => {
      // Add a custom class to the elements that where selected.
      for (const el of added) {
        let imgId: number = +el.getAttribute('data-id');
        this.selected[imgId] = true;
      }
  
      // Remove the class from elements that where removed
      // since the last selection
      for (const el of removed) {
        let imgId: number = +el.getAttribute('data-id');
        delete this.selected[imgId];
      }
    }).on('stop', ({inst}) => {
      // Remember selection in case the user wants to add smth in the next one
      inst.keepSelection();
    });
  }
}
