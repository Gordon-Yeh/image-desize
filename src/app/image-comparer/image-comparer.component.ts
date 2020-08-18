import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
type View = 'compare' | 'y' | 'vertical';
interface Jpeg {
  file : File,
  quality : number,
};

@Component({
  selector: 'image-comparer',
  templateUrl: 'image-comparer.component.html',
  styleUrls: ['./image-comparer.component.scss']
})
export class ImageComparerComponent implements OnInit {
  /* control fields */
  quality = 85;
  outputNameField = 'output';
  orig : Jpeg;
  compr : Jpeg;
  viewMode : View = 'y';
  /* HTML Elements */
  compareXCanvas : HTMLCanvasElement;
  compareYCanvas : HTMLCanvasElement;
  YCanvas : HTMLCanvasElement;
  inputCanvas : HTMLCanvasElement;

  constructor(private ref: ChangeDetectorRef) { }

  static getInnerWidth(e : HTMLElement) : number {
    var styles = window.getComputedStyle(e);
    var padding = parseFloat(styles.paddingLeft) +
      parseFloat(styles.paddingRight);
    return e.clientWidth - padding;
  }

  drawImage(canvas : HTMLCanvasElement, url : string, callback=null, resize=true) : void {
    let img = new Image();
    img.src = url;

    img.onload = function() {
      if (resize) {
        // set canvas to width for the parents element (not including padding/margin)
        var dWidth = ImageComparerComponent.getInnerWidth(canvas.parentElement);
        var dHeight = dWidth / img.width * img.height;
        // image should not exceed a portion of the screen
        if (dHeight > window.innerHeight * 0.8) {
          dHeight = window.innerHeight * 0.8;
          dWidth = dHeight / img.height * img.width;
        }
      } else {
        var dWidth = img.width;
        var dHeight = img.height;
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

      if (callback)
        callback();
    }
  }

  getOGFileSize() : number {
    return this.orig ? this.orig.file.size : -1;
  }

  getCPFileSize() : number {
    return this.compr ? this.compr.file.size : -1;
  }

  getFileDifference() : number {
    return (this.compr.file.size - this.orig.file.size) / this.orig.file.size;
  }

  getCurrentViewModel() : View {
    return this.viewMode;
  }

  selectedImg() : boolean {
    return this.orig !== undefined;
  }

  drawBlob(canvas : HTMLCanvasElement, blob : Blob, callback=(()=>{}), resize=true) : void {
    // TODO: check that blob is an image file
    var bUrl = URL.createObjectURL(blob);
    this.drawImage(canvas, bUrl, () => {
      callback();
      URL.revokeObjectURL(bUrl);
    }, resize);
  }

  drawView() {
    switch (this.viewMode) {
      case 'compare':
        this.copyInputTo(this.compareXCanvas, 1);
        this.copyInputTo(this.compareYCanvas, this.quality / 100);
      case 'y':
        this.copyInputTo(this.YCanvas, this.quality / 100);
      case 'vertical':
    }
  }

  copyInputTo(to : HTMLCanvasElement, quality : number) {
    if (quality === 1) {
      this.drawBlob(to, this.orig.file);
    } else if (this.compr && this.compr.quality == quality) {
      this.drawBlob(to, this.compr.file);
    } else {
      this.inputCanvas.toBlob((b : File) => {
        this.compr = { file: b, quality };
        this.drawBlob(to, b);
        // a fix for file size display not being updated properly
        this.ref.detectChanges();
      }, 'image/jpeg', quality);
    }
  }

  handleDownload() {
    var a = document.createElement('a');
    a.download = this.outputNameField + '.jpeg';
    var bUrl = URL.createObjectURL(this.compr.file);
    a.href = bUrl;
    a.click();
    URL.revokeObjectURL(bUrl);
    a.remove();
  }

  handleQualityChange() {
    console.log('handleQualityChange', this.quality);
    this.drawView();
  }

  handleViewChange(mode : View) {
    if (mode === this.viewMode) {
      return;
    }
    this.viewMode = mode;
    this.drawView();
  }

  imgFileSelectHandler() {
    var fileInput = document.getElementById('file-selector') as HTMLFormElement;
    var file : File = fileInput.files[0];
    console.log(file);
    if (file.type !== 'image/jpeg') {
      alert(`${file.name} is not a JPEG file`);
      return;
    }
    this.orig = { file, quality: 1 };
    this.drawBlob(this.inputCanvas, file, () => { this.drawView() }, false);
    this.outputNameField = `${file.name.split('.')[0]}-compressed`;
  }

  ngOnInit() {
    this.inputCanvas = document.getElementById('input-canvas') as HTMLCanvasElement;
    this.compareXCanvas = document.getElementById('before') as HTMLCanvasElement;
    this.compareYCanvas = document.getElementById('after') as HTMLCanvasElement;
    this.YCanvas = document.getElementById('y-canvas') as HTMLCanvasElement;

    // resize images appropriately if view size changes
    window.addEventListener('resize', () => {
      if (this.selectedImg()) {
        this.drawView();
      }
    })
  }
}