import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

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
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SettingsModule { }
