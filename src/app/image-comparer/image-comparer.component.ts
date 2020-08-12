import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'image-comparer',
  templateUrl: 'image-comparer.component.html',
  styleUrls: ['./image-comparer.component.scss']
})
export class ImageComparerComponent implements OnInit {
  quality = new FormControl(85);
  imgPathField = new FormControl();
  outputNameField = new FormControl("output");
  orig : File;
  cmprsd : File;

  constructor(private ref: ChangeDetectorRef) { }

  static getInnerWidth(e : HTMLElement) : number {
    var styles = window.getComputedStyle(e);
    var padding = parseFloat(styles.paddingLeft) +
      parseFloat(styles.paddingRight);
    return e.clientWidth - padding;
  }

  drawImage(canvas : HTMLCanvasElement, url : string, callback = () => {}) : void {
    let img = new Image();
    img.src = url;

    img.onload = function() {
      // set canvas to width for the parents element (not including padding/margin)
      var dWidth = ImageComparerComponent.getInnerWidth(canvas.parentElement);
      var dHeight = dWidth / img.width * img.height;
      // image should not exceed a portion of the screen
      if (dHeight > window.innerHeight * 0.8) {
        dHeight = window.innerHeight * 0.8;
        dWidth = dHeight / img.height * img.width;
      }
      canvas.width = dWidth;
      canvas.height = dHeight;

      var ctx = canvas.getContext('2d');
      ctx.drawImage(img,
        0, 0,
        img.width, img.height,
        0, 0,
        dWidth, dHeight
      );
      callback();
    }
  }

  getOGFileSize() : number {
    return this.orig ? this.orig.size : -1;
  }

  getCPFileSize() : number {
    return this.cmprsd ? this.cmprsd.size : -1;
  }

  selectedImg() : boolean {
    return this.orig !== undefined;
  }

  toSizeString(bytes : number, unit : 'B' | 'KB' | 'MB' | 'GB') : string {
    var denom = {
      'B': 1,
      'KB': 1_000,
      'MB': 1_000_000,
      'GB': 1_000_000_000
    };

    return `${bytes / denom[unit]} ${unit}`;
  }

  drawBlob(canvas : HTMLCanvasElement, blob : Blob, callback = () => {}) : void {
    // TODO: check that blob is an image file
    var bUrl = URL.createObjectURL(blob);
    this.drawImage(canvas, bUrl, () => {
      callback();
      URL.revokeObjectURL(bUrl);
    });
  }

  handleDownload() {
    var a = document.createElement('a');
    a.download = this.outputNameField.value + '.jpeg';
    var bUrl = URL.createObjectURL(this.cmprsd);
    a.href = bUrl;
    a.click();
    URL.revokeObjectURL(bUrl);
    a.remove();
  }

  handleQualityChange() {
    console.log('handleQualityChange', this.quality.value);
    var before = document.getElementById('before') as HTMLCanvasElement;
    var after = document.getElementById('after') as HTMLCanvasElement;
    // apply JPEG compressing using 
    before.toBlob((b : File) => {
      console.log(b);
      this.cmprsd = b;
      this.drawBlob(after, b);
      // a fix for file size display not being updated properly
      this.ref.detectChanges();
    }, 'image/jpeg', this.quality.value / 100);
  }

  imgFileSelectHandler() {
    var fileInput = document.getElementById('file-selector') as HTMLFormElement;
    var file : File = fileInput.files[0];
    console.log(file);
    if (file.type !== 'image/jpeg') {
      alert(`${file.name} is not a JPEG file`);
      return;
    }
    this.orig = file;
    this.outputNameField.setValue(`${file.name.split('.')[0]}-compressed`);
    var before = document.getElementById('before') as HTMLCanvasElement;
    this.drawBlob(before, file, () => { this.handleQualityChange() });
  }

  ngOnInit() {
    // resize images appropriately if view size changes
    window.addEventListener('resize', () => {
      if (this.orig) {
        var before = document.getElementById('before') as HTMLCanvasElement;
        var after = document.getElementById('after') as HTMLCanvasElement;
        this.drawBlob(before, this.orig);
        this.drawBlob(after, this.cmprsd);
      }
    })
  }
}