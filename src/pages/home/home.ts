import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MessagesService} from "./messages.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  /* Formulario mensajes */
  username: String;
  message: String;
  usernameLabel: String;
  buttonLabel: String;
  messageLabel: String;
  messagesArray: Array<Object>;
  isActive: Boolean;

  /* Listado de mensajes */
  messages: Array<any>;

  constructor(public navCtrl: NavController, private messagesService: MessagesService) {

    this.usernameLabel = 'Username';
    this.messageLabel = 'Message';
    this.buttonLabel = 'Send';
    this.resetForm();

    messagesService.items.subscribe(items => {
      this.messages = items;
    })
  }

  ngOnInit() {

  }

  /**
   * Emit an event with the message information
   */
  sendMessage(): void {
    if (this.validateMessage()) {
      this.messagesService.pushMessage({
        message: this.message,
        username: this.username
      });
      this.resetForm();
    }
  };

  resetForm(): void {
    this.username = '';
    this.message = '';
  }

  validateMessage(): boolean {
    return this.message != '' && this.username != '';
  }

}
