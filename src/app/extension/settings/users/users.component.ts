import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.inteface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  isAddUserModalOn: boolean;
  userToEdit: User;

  constructor() { }

  ngOnInit(): void {
  }

  onUserFound(user: User) {
    console.log(user);
  }

  saveUser(user: User){

  }

  toggleModal(){
    this.isAddUserModalOn = !this.isAddUserModalOn;
  }

}
