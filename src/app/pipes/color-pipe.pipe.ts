import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorPipe'
})
export class ColorPipePipe implements PipeTransform {

  transform(value: number): string {
    if(value<10){
      return "green";
    } else if (value<40){
      return "yellow";
    }
    return "red";
  }

}
