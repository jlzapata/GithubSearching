import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapTransformation'
})
export class MapTransformationPipe implements PipeTransform {

  transform(value: string, map: Map<string, string>): string {
    let color: string = map.get(value.toLowerCase());
    return color ? color : 'black';
  }

}
