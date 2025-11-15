import { Component, Input } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //@Input() avatar!: string; //Tells TS that it will receive a value from outside
  //@Input() name!: string;
  //@Input() id!: string;
  id!: String;
  name!: String;
  avatar!: String;
  //@Input() rcv_user!: User;
  @Input({ required: true }) set rcv_user(value: User) {
    if (!value) {
      return;
    }
    this.id = value.id;
    this.name = value.name;
    this.avatar = value.avatar;
  }
}
