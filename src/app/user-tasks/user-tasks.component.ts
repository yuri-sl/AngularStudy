import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user/user.model';
@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  id!: string;
  name!: String;
  avatar!: String;

  @Input({ required: true }) set UserValue(rcv_value: User) {
    this.id = rcv_value.id;
    this.name = rcv_value.name;
    this.avatar = rcv_value.avatar;
  }
  @Output() selectedUser = new EventEmitter<String>();
  onSelectedUser() {
    console.log('The selected user is: ' + this.name);
  }
}
