import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import FileWithURL from '../models/FileWithURL';
import { ImageCompressionService } from '../services/image-compression.service';
import * as JSZip from 'jszip';
import { download } from '../helpers/files';

const DOUBLECLICK_THRESHHOLD = 200;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  selected = {};
  quality = 100;
  busy = false;

  constructor(
    public imgService: ImageCompressionService,
    private route: Router,
  ) {
    console.log('gallery.component constructor');
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

  handleImgFrameClick(e: MouseEvent, imgId: number) {
    console.log('handleImgFrameClick:', imgId);
    e.stopPropagation();

    if (e.shiftKey) {
      console.log('clicked when shifted')
      // shift logic here
      let selectedImg = Object.keys(this.selected);
      let first = Number(selectedImg[0]);
      let last = Number(selectedImg[selectedImg.length-1]);
      this.allImgs.forEach(id => {
        if ((imgId < first && id < first && id > imgId) ||
          (imgId > last && id > last && id < imgId)) {
            console.log('selected id', id)
            this.selected[id] = true;
        }
      });
    } else if (!e.ctrlKey) {
      this.selected = {};
    }

    this.selected[imgId] = true;
  }

  handleSelectAll(e: MouseEvent) {
    e.stopPropagation();
    this.allImgs.forEach(id => {
      this.selected[id] = true;
    });
  }

  handleImgFrameDoubleClick(e: MouseEvent, imgId: number) {
    e.stopPropagation();
    this.selected = {};
    this.route.navigateByUrl('/edit/' + imgId);
  }

  handleDeselectClick() {
    console.log('deslecting all images');
    this.selected = {};
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
  }
}
