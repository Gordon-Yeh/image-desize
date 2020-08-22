import { Injectable } from '@angular/core';
import FileWithURL from '../models/FileWithURL';
import { drawImage, toJPEG } from '../helpers/canvas';

interface ImgInfo {
  imgId: number;
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

  addImg(img: File): ImgInfo {
    this.idCounter++;
    return this.images[this.idCounter] = {
      'imgId': this.idCounter,
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

  compressImg(imgId: number, quality: number) : Promise<ImgInfo> {
    let img = this.images[imgId];
    let canvas = document.createElement('canvas') as HTMLCanvasElement;
    return drawImage(canvas, img.original.url, false)
      .then(() => {
        return toJPEG(canvas, quality);
      })
      .then((b : Blob) => {
        img.compressed.release();
        img.compressed = new FileWithURL(b as File);
        img.quality = quality;
        return img;
      })
      .catch(e => {
        throw e;
      });
  }
}
