import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/models/user.model';

@Pipe({
  name: 'clone',
  standalone: true
})
export class ClonePipe implements PipeTransform {

  transform(value: User): User {
    return { ...value }; 
  }

}
