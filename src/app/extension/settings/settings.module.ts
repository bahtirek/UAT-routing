import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { MoreButtonMenuModule } from 'src/app/shared/more-button-menu/more-button-menu.module';
import { EditNameComponent } from './profile/edit-name/edit-name.component';
import { EditEmailComponent } from './profile/edit-email/edit-email.component';
import { EditPasswordComponent } from './profile/edit-password/edit-password.component';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUserModule } from 'src/app/shared/search-user/search-user.module';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes = [
  { 
    path: '', component: SettingsComponent,
    children: [
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'users', component: UsersComponent
      },
    ] 
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    UsersComponent,
    EditNameComponent,
    EditEmailComponent,
    EditPasswordComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    MoreButtonMenuModule,
    ModalModule,
    ReactiveFormsModule,
    SearchUserModule,
    RouterModule.forChild(routes),
  ]
})
export class SettingsModule { }
