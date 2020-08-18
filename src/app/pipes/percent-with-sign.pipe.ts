import { Pipe, PipeTransform } from '@angular/core';
import { PercentPipe } from '@angular/common';

@Pipe({
  name: 'percentWithSign'
})
export class PercentWithSignPipe implements PipeTransform {
  transform(value: number): unknown {
    let pipe = new PercentPipe('en-US');
    return (value >= 0 ? '+' : '') + pipe.transform(value);
  }
}
