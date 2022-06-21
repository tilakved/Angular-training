import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {
  private y: number = 0;
  transform(value: any): any {
    if (value.includes(',')) {
      return value.substring(0, value.indexOf(',')) + '.' + value.substring(value.indexOf(',')+1, )
    }
  }
}
