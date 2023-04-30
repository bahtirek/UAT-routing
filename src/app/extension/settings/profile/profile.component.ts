import { Component, OnInit } from '@angular/core';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';
import { Name } from 'src/app/interfaces/name.inteface';
import { User } from 'src/app/interfaces/user.inteface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  user: User = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'email@email.com',
    userRole: '1'
  }

  actions: MoreButtonAction[] = [
    {
      name: 'Update name',
      action: 'updateName',
      display: true
    },
    {
      name: 'Update email',
      action: 'updateEmail',
      display: true
    },
    {
      name: 'Update password',
      action: 'updatePassword',
      display: true
    },
  ]
  nameModal: boolean;
  emailModal: boolean;
  passwordModal: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  saveEmail(event: string){
    this.emailModal = false
  }
  saveName(event: Name){
    this.nameModal = false;
  }
  savePassword(event: string){
    this.passwordModal = false
  }

  onNameUpdate(){
    this.nameModal = true
    
  }
  onEmailUpdate(){
    this.emailModal = true
    
  }
  onPasswordUpdate(){
    this.passwordModal = true
    
  }

  onAction(event: string){
    switch (event) {
      case 'updateName': this.onNameUpdate(); break;
      case 'updateEmail': this.onEmailUpdate(); break;
      case 'updatePassword': this.onPasswordUpdate(); break;
    }
  }
}
