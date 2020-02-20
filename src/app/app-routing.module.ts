import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import {DetailUserComponent} from './detail-user/detail-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AdminGuardGuard } from './admin-guard.guard';


const routes: Routes = [
  
  { path: "", component: LoginComponent },
  { path: "index", redirectTo: "" },
  { path: "users",canActivate:[AdminGuardGuard], component: UsersComponent },
  { path: "DetailUser",canActivate:[AdminGuardGuard], component: DetailUserComponent },
  { path: "AddUser",canActivate:[AdminGuardGuard], component: AddUserComponent },
  {path:"**",component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
