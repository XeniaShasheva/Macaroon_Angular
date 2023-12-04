import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advantagesDescription'
})
export class AdvantagesDescriptionPipe implements PipeTransform {

  transform(value: string): string {
       return value.length > 95 ? value.slice(0,94) + '...' : value;

  }

}
