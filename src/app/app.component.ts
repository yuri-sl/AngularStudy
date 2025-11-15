import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TestanComponent } from './testan/testan.component';
import { DUMMY_USERS } from './dummy-users';
import { UserTasksComponent } from './user-tasks/user-tasks.component';
import { User } from './user/user.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TestanComponent,
    UserTasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: String;
  onSelectUser(id: String) {
    console.log('Selected user with ID: ' + id);
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUserOutput(id: String) {
    console.log('The output with the signal is: ' + id);
  }
}
