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
  firstImg = 1;
  lastImg = 1;

  constructor() { }

  addImg(img: File): ImgInfo {
    this.idCounter++;
    this.lastImg = this.idCounter;
    return this.images[this.idCounter] = {
      'imgId': this.idCounter,
      'original': new FileWithURL(img),
      'compressed': new FileWithURL(img),
      'quality': 100
    }
  }

  getImgIds(): number[] {
    return Object.keys(this.images).map(k => Number(k));
  }

  getImgs(): { [key: number]: ImgInfo; } {
    return this.images;
  }

  getImgCount(): number {
    return this.idCounter;
  }

  getImg(id: number): ImgInfo {
    return this.images[id];
  }

  // get the next in order of ascending img id
  // will wrap around to the first img once the end is reached 
  getNextImg(id: number, reverse=false): number {
    let incre = reverse ? -1 : 1;
    // step forward from the given id, until a image is found
    let i = id;
    do {
      i = (i+incre) % (this.idCounter+1);
      if (i == 0)
        i = this.idCounter;
      if (this.images.hasOwnProperty(i))
        return i;
    } while (i != id);

    return id;
  }

  isFirstImg(id: number) : boolean {
    return this.firstImg == id;
  }

  isLastImg(id: number) : boolean {
    return this.lastImg == id;
  }

  compressImg(imgId: number, quality: number) : Promise<ImgInfo> {
    let img = this.images[imgId];
    let canvas = document.createElement('canvas') as HTMLCanvasElement;
    return drawImage(canvas, img.original.url)
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
