import { Component } from '@angular/core';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { CreateUserComponent } from "../../components/create-user/create-user.component";

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserListComponent, CreateUserComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {

}
