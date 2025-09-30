import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(
    value: number[] | string[] | null,
    direction: 'asc' | 'desc'
  ) {
    if(!value) return value;

    const val = [...value];
    val.sort( (a,b) => {
      if( direction === 'asc' ) return a > b ? 1 : -1;
      else return a > b ? -1 : 1;
    })
    return val;
  }
}
