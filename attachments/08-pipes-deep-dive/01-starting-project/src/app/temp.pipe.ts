import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TempPipe implements PipeTransform {

  transform(
    value: string | number | null, 
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ) {
    let val: number;
    if ( !value ) {
       return value; 
    } else if ( typeof(value) === 'string' ) {
      val = parseFloat(value);
    } else {
      val = value;
    }
    
    let outputTemp: number;
    if ( inputType === 'cel' && outputType === 'fah' ) {
      outputTemp = val * (9/5) + 32;
    }
    else if ( inputType === 'fah' && outputType === 'cel' ) {
      outputTemp = (val - 32) * 5 / 9;
    }
    else {
      outputTemp = val;
    }

    let symbol: string;
    if (outputType) {
      symbol = outputType === 'cel' ? '°C' : '°F'
    } else {
      symbol = inputType === 'cel' ? '°C' : '°F'
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
