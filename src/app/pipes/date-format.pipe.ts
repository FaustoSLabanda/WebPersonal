import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): any {

    if (!value) { return ''; }

    const partes = value.split('-');

    if (partes.length === 3) {
      return `${partes[2]}\/${partes[1]}\/${partes[0]}`;
    }

    return value;
  }

}
