import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'image-comparer',
  templateUrl: 'image-comparer.component.html',
  styleUrls: ['./image-comparer.component.scss']
})
export class ImageComparerComponent implements OnInit {
  quality = new FormControl(100);

  constructor() { }

  loadAndDrawImage(canvas : HTMLCanvasElement, url : string, callback = () => {}) : void {
    var parent = canvas.parentElement;
    let img = new Image();
    img.src = url;

    img.onload = function() {
      var dWidth = parent.offsetWidth;
      var dHeight = parent.offsetWidth / img.width * img.height;

      // set canvas to be as big as the image
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

  ngOnInit() {
    var jQuality = 0.85;
    var before = document.getElementById('before') as HTMLCanvasElement;
    var after = document.getElementById('after') as HTMLCanvasElement;
    this.loadAndDrawImage(before, '/assets/profile-1.jpg', () => {
      before.toBlob((blob) => {
        var cUrl = URL.createObjectURL(blob);
        this.loadAndDrawImage(after, cUrl);
      }, 'image/jpeg', jQuality);
    });
  }
}