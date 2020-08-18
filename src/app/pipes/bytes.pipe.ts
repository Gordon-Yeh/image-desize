import { Pipe, PipeTransform } from '@angular/core';

type FileSizeUnit = 'B' | 'KB' | 'MB' | 'GB';
var denom = {
  'B': 1,
  'KB': 1_000,
  'MB': 1_000_000,
  'GB': 1_000_000_000
};

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {
  transform(value: number, unit: FileSizeUnit): unknown {
    return `${value / denom[unit]} ${unit}`;
  }
}
