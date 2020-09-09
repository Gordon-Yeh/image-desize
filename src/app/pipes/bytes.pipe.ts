import { Pipe, PipeTransform } from '@angular/core';

type FileSizeUnit = 'B' | 'KB' | 'MB' | 'GB';
var denom = {
  'GB': 1_000_000_000,
  'MB': 1_000_000,
  'KB': 1_000,
  'B': 1
};

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {
  transform(value: number, unit: FileSizeUnit = null, numDecimals=2): unknown {
    if (unit === null) {
      let maxUnit = 0;
      for (const u in denom) {
        if (value > (denom[u] / 2) && denom[u] > maxUnit) {
          unit = u as FileSizeUnit;
          maxUnit = denom[u];
        }
      }
    }
    let sizeInUnit = value / denom[unit];
    return `${sizeInUnit.toFixed(numDecimals)} ${unit}`;
  }
}
