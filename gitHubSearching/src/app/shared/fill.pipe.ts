import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {

  transform(value: number ): any {
    return Array(value).fill(0).map((_, i ) => i + 1);
  }

}
