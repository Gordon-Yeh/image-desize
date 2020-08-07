import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'quality-selector',
  templateUrl: 'quality-selector.component.html',
  styleUrls: ['./quality-selector.component.scss']
})
export class QualitySelectorComponent implements OnInit {
  quality = new FormControl(100);

  constructor() { }

  ngOnInit() { }
}