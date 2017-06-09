import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersService} from "./contact.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  arrayUsers: Array<Object>;

  constructor(private usersService: UsersService) {
    this.arrayUsers = [];
    this.usersService.getUsers()
      .subscribe(users => {
        this.arrayUsers = users['results'];
        console.log(this.arrayUsers, users);
      });
  }

  borraUser(usr) {
    console.log(usr);
    this.arrayUsers.splice(usr,1);
  }

}
