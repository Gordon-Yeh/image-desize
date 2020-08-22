import { Component, OnInit } from '@angular/core';
import { FileWithURL } from '../models/FileWithURL';
import { ImageCompressionService } from '../services/image-compression.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images = {};
  selection = {};
  imageCounter = 0;

  constructor(public imageCompressionService: ImageCompressionService) { }

  handleImgHighlight(key) {
    console.log("selected img", key)
    this.selection[key] = !this.selection[key];
  }

  handleFileSelect() {
    const input = document.getElementById('fileselector') as HTMLInputElement;
    if (input.files.length < 1)
      return;

    for (let i = 0; i < input.files.length; i++) {
      this.imageCompressionService.addImg(input.files[i]);
    }
  }

  ngOnInit(): void {
  }
}
