import { Injectable } from '@angular/core';
import { FileWithURL } from '../models/FileWithURL';

interface ImgInfo {
  original: FileWithURL;
  compressed: FileWithURL;
  quality: number;
}

@Injectable({
  providedIn: 'root'
})
export class ImageCompressionService {
  images: { [key: number]: ImgInfo; } = {};
  idCounter = 0;

  constructor() { }

  addImg(img: File): void {
    this.images[this.idCounter++] = {
      'original': new FileWithURL(img),
      'compressed': new FileWithURL(img),
      'quality': 100
    }
  }

  getImgs(): { [key: number]: ImgInfo; } {
    return this.images;
  }

  getImg(id: number): ImgInfo {
    return this.images[id];
  }

  compressImgs(imgIds: [number], quality: number) {

  }
}
