import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TestanComponent } from './testan/testan.component';
import { DUMMY_USERS } from './dummy-users';
import { UserTasksComponent } from './user-tasks/user-tasks.component';
import { type User } from './user/user.model';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_TASKS } from './tasks/task/dummy_tasks';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TestanComponent,
    NewTaskComponent,
    UserTasksComponent,
    TaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  loaded_tasks = DUMMY_TASKS;
  selectedUserId!: String;
  isAddingTask: boolean = false;
  onSelectUser(id: String) {
    console.log('Selected user with ID: ' + id);
    this.selectedUserId = id;
  }
  onStartAddTask(){
    this.isAddingTask = true;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUserOutput(id: String) {
    console.log('The output with the signal is: ' + id);
  }
  @Input ({}) setLog(usuarioLogado: String){
    
  };
}
