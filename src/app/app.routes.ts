import { Routes } from '@angular/router';
import { UserManagementComponent } from './users/page/user-management/user-management.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'manage-users', pathMatch: 'full'
    },
    {
        path: 'manage-users', component: UserManagementComponent
    }

];
