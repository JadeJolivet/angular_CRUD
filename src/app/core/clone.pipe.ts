import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clone',
  standalone: true
})
export class ClonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
