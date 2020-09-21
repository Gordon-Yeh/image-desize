import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { drawImage } from '../helpers/canvas';

@Component({
  selector: 'app-panning-canvas',
  templateUrl: './panning-canvas.component.html',
  styleUrls: ['./panning-canvas.component.scss']
})
export class PanningCanvasComponent implements OnInit {
  @ViewChild('mycanvas') canv : ElementRef;
  @ViewChild('canvwindow') canvWindow : ElementRef;
  @Input('height') winHeight = 0;
  @Input('width') winWidth = 0;
  xoffset = 0;
  yoffset = 0;
  prevTouchX = 0;
  prevTouchY = 0;
  mouseHeld:boolean = false;
  mouseTarget:EventTarget;
  panTarget:EventTarget;
  onPan:Function;

  constructor() {
  }

  async redraw(img:string) {
    return drawImage(this.canv.nativeElement, img);
  }

  resizeWindow(width:number, height:number) {
    this.winWidth = width;
    this.winHeight = height;
  }

  move(x:number, y:number) {
    let maxScrollX = this.canvWindow.nativeElement.scrollWidth - this.canvWindow.nativeElement.clientWidth;
    let maxScrollY = this.canvWindow.nativeElement.scrollHeight - this.canvWindow.nativeElement.clientHeight;
    this.xoffset -= x;
    this.xoffset = this.xoffset > maxScrollX ? maxScrollX : this.xoffset;
    this.xoffset = this.xoffset < 0 ? 0 : this.xoffset;
    this.yoffset -= y;
    this.yoffset = this.yoffset > maxScrollY ? maxScrollY : this.yoffset;
    this.yoffset = this.yoffset < 0 ? 0 : this.yoffset;
    this.canvWindow.nativeElement.scroll(this.xoffset, this.yoffset);
  }

  handleMouseDown(e:MouseEvent) {
    this.mouseHeld = true;
    this.panTarget = e.target;
  }

  handleMouseMove(e:MouseEvent) {
    if (e.target == this.panTarget && this.mouseHeld) {
      this.move(e.movementX, e.movementY);
      if (this.onPan)
        this.onPan(e.movementX, e.movementY);
    }
  }

  handleMouseUp() {
    this.mouseHeld = false;
  }

  handleScroll(e:WheelEvent) {
    e.preventDefault();
  }

  handleTouchStart(e:TouchEvent) {
    if (e.touches.length === 1) {
      let touch = e.touches.item(0);
      this.prevTouchX = touch.screenX;
      this.prevTouchY = touch.screenY;
    }
  }

  handleTouchMove(e:TouchEvent) {
    e.preventDefault();
    if (e.touches.length === 1) {
      let touch = e.touches.item(0);
      let dx = touch.screenX-this.prevTouchX;
      let dy = touch.screenY-this.prevTouchY;
      this.move(dx, dy)
      if (this.onPan)
        this.onPan(dx, dy);
      this.prevTouchX = touch.screenX;
      this.prevTouchY = touch.screenY;
    }
  }

  ngOnInit(): void {
  }
}
