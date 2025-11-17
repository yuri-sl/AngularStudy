import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from '../tasks/task/task.component';
@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  @Input() item: String | undefined; //Creates a union Type.
  @Input() itemWithQuestion?: String; //Same thing
  id!: string;
  name!: String;
  avatar!: String;

  @Input({ required: true }) set UserValue(rcv_value: User) {
    this.id = rcv_value.id;
    this.name = rcv_value.name;
    this.avatar = rcv_value.avatar;
  }
  /*
  Now we have to manipulate this user Type Input
  @Input ({required:true}) user!: {
    id: string;
    name: string;
    avatar: string;
  }
  */
  @Output() selectedUser = new EventEmitter<String>();
  onSelectedUser() {
    console.log('The selected user is: ' + this.name);
  }
}
