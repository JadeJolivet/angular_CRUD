import { Component, inject } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  private _userApiService: UserApiService = inject(UserApiService);
  users$: Observable<User[]> = this._userApiService.getAllUsers$();
  
}
