import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // return '<h2>' + value.toUpperCase() + '</h2>'; //this would not work.
    return value.toUpperCase()
  }

}
