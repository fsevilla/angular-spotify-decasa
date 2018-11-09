import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noAplica'
})
export class NoAplicaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	args = args || 'N/A';
    return value ? value : args;
  }

}
