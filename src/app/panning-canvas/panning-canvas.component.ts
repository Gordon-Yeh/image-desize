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
  @Input('height') winHeight:number;
  @Input('width') winWidth:number;
  xoffset:number = 0;
  yoffset:number = 0;
  prevTouchX:number = 0;
  prevTouchY:number = 0;
  mouseHeld:boolean = false;
  touching:boolean = false;
  mouseTarget:EventTarget;
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
    this.mouseTarget = e.target;
  }

  handleMouseMove(e:MouseEvent) {
    if (e.target == this.mouseTarget && this.mouseHeld) {
      this.move(e.movementX, e.movementY);
      if (this.onPan)
        this.onPan(e.movementX, e.movementY);
    }
  }

  handleMouseUp() {
    this.mouseHeld = false;
  }

  handleScroll(e:WheelEvent) {
    console.log("scroll event!");
    this.onPan(-e.deltaX, -e.deltaY);
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
      console.log(`dx=${dx}, dy=${dy}`);
      this.move(dx, dy)
      if (this.onPan)
        this.onPan(dx, dy);
      this.prevTouchX = touch.screenX;
      this.prevTouchY = touch.screenY;
    }
  }

  handleTouchEnd(e:TouchEvent) {
  }

  ngOnInit(): void {
  }
}
