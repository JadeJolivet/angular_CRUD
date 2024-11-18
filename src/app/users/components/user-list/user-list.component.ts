import { ClonePipe } from './../../../core/clone.pipe';
import { Component, inject } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, ClonePipe, UpdateUserComponent, DeleteUserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  private _userApiService: UserApiService = inject(UserApiService);
  users$: Observable<User[]> = this._userApiService.getAllUsers$();
  
}
