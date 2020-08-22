import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageCompressionService } from '../services/image-compression.service';
import { drawImage } from '../helpers/canvas';

type View = 'compare' | 'y' | 'vertical';
@Component({
  selector: 'image-comparer',
  templateUrl: 'image-comparer.component.html',
  styleUrls: ['./image-comparer.component.scss']
})
export class ImageComparerComponent implements OnInit {
  /* control fields */
  quality = 85;
  outputNameField = 'output';
  viewMode : View = 'y';
  imageInfo : any;
  imgId: number;
  /* HTML Elements */
  compareXCanvas : HTMLCanvasElement;
  compareYCanvas : HTMLCanvasElement;
  YCanvas : HTMLCanvasElement;

  constructor(
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef,
    public imgService: ImageCompressionService
  ) { }

  getOGFileSize() : number {
    return this.imageInfo ? this.imageInfo.original.f.size : -1;
  }

  getCPFileSize() : number {
    return this.imageInfo ? this.imageInfo.compressed.f.size : -1;
  }

  getFileDifference() : number {
    return (this.imageInfo.compressed.f.size - this.imageInfo.original.f.size) / this.imageInfo.original.f.size;
  }

  getCurrentViewModel() : View {
    return this.viewMode;
  }

  selectedImg() : boolean {
    return this.imageInfo != undefined;
  }

  drawView() {
    if (!this.imageInfo)
      return;

    switch (this.viewMode) {
      case 'compare':
        drawImage(this.compareXCanvas, this.imageInfo.original.url);
        drawImage(this.compareYCanvas, this.imageInfo.compressed.url);
      case 'y':
        drawImage(this.YCanvas, this.imageInfo.compressed.url);
      case 'vertical':
    }
  }

  handleDownload() {
    var a = document.createElement('a');
    a.download = this.outputNameField + '.jpeg';
    a.href = this.imageInfo.compressed.url;
    a.click();
    a.remove();
  }

  handleQualityChange() {
    this.imgService.compressImg(this.imageInfo.imgId, this.quality)
      .then((info) => {
        this.imageInfo = info;
        this.drawView();
      })
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
    this.imageInfo = this.imgService.addImg(file);
    this.outputNameField = `${file.name.split('.')[0]}-compressed`;
    this.drawView();
  }

  ngOnInit() {
    this.compareXCanvas = document.getElementById('before') as HTMLCanvasElement;
    this.compareYCanvas = document.getElementById('after') as HTMLCanvasElement;
    this.YCanvas = document.getElementById('y-canvas') as HTMLCanvasElement;

    // resize images appropriately if view size changes
    window.addEventListener('resize', this.drawView);
    this.imgId = +this.route.snapshot.paramMap.get('id');
    this.imageInfo = this.imgService.getImg(this.imgId);
    this.outputNameField = `${this.imageInfo.original.f.name.split('.')[0]}-compressed`;
    this.drawView();
  }
}