import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageCompressionService } from '../services/image-compression.service';
import { drawImage } from '../helpers/canvas';
import { PanningCanvasComponent } from '../panning-canvas/panning-canvas.component';

type View = 'compare' | 'y' | 'vertical';
@Component({
  selector: 'image-comparer',
  templateUrl: 'image-comparer.component.html',
  styleUrls: ['./image-comparer.component.scss']
})
export class ImageComparerComponent implements OnInit, AfterViewInit {
  @ViewChild('singleview') singleViewCanvas:PanningCanvasComponent;
  @ViewChild('beforeview') beforeViewCanvas:PanningCanvasComponent;
  @ViewChild('afterview') afterViewCanvas:PanningCanvasComponent;
  /* control fields */
  quality = 85;
  outputNameField = 'output';
  viewMode : View = 'compare';
  imageInfo : any;
  imgId: number;
  /* HTML Elements */
  compareXCanvas : HTMLCanvasElement;
  compareYCanvas : HTMLCanvasElement;
  YCanvas : HTMLCanvasElement;
  win = window;

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
    console.log('drawView');
    if (!this.imageInfo)
      return;

    switch (this.viewMode) {
      case 'compare':
        this.beforeViewCanvas.redraw(this.imageInfo.original.url);
        this.afterViewCanvas.redraw(this.imageInfo.compressed.url);
      case 'y':
        this.singleViewCanvas.redraw(this.imageInfo.compressed.url);
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
    console.log('handleViewChange');
    if (mode === this.viewMode) {
      return;
    }
    this.viewMode = mode;
    this.drawView();
  }

  handleChangeImg(orderReversed=false) {
    this.imgId = this.imgService.getNextImg(this.imgId, orderReversed);
    this.imageInfo = this.imgService.getImg(this.imgId);
    this.outputNameField = `${this.imageInfo.original.f.name.split('.')[0]}-compressed`;
    this.quality = this.imageInfo.quality;
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
    // resize images appropriately if view size changes
    window.addEventListener('resize', () => {
      this.drawView();
    });
    this.imgId = +this.route.snapshot.paramMap.get('id');
    this.imageInfo = this.imgService.getImg(this.imgId);
    console.log('imginfo', this.imageInfo)
    this.outputNameField = `${this.imageInfo.original.f.name.split('.')[0]}-compressed`;
    this.quality = this.imageInfo.quality;
  }

  ngAfterViewInit() {
    // we do this here instead of ngOnInit() because ViewChild aren't guarentee to be populated at that time
    // reference: https://blog.angular-university.io/angular-viewchild/
    this.drawView();
    this.beforeViewCanvas.onPan = (x, y) => { this.afterViewCanvas.move(x, y) };
    this.afterViewCanvas.onPan = (x, y) => { this.beforeViewCanvas.move(x, y) };
  }
}