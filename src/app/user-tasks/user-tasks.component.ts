import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from '../tasks/task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { type NewTaskData } from '../tasks/task/task.model';
import { CardComponent } from "../shared/card/card.component";
import { DUMMY_TASKS } from '../tasks/task/dummy_tasks';
@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  @Input() item: String | undefined; //Creates a union Type.
  @Input() itemWithQuestion?: String; //Same thing
  id!: string;
  name!: String;
  avatar!: String;
  isAddingTask: boolean = false;
  date! :String;

  DUMMY_TASKS = [
    {
      id: 1,
      title: 'Master Angular',
      description: 'Learn all of Angular and master the basics',
      completed: false,
      user_assigned: ['u1', 'u2'],
      date: '2025-08-10'
    },
    {
      id: 2,
      title: 'Angular Componentation',
      description: 'Learn to build Angular Components',
      completed: false,
      user_assigned: ['u1'],
      date: '2025-08-10'
    },
    {
      id: 3,
      title: 'Angular TS',
      description: 'Use Angular TS',
      completed: true,
      user_assigned: ['u3'],
      date: '2025-08-10'
    }
  ];
  loaded_tasks = this.DUMMY_TASKS;
  tasks_length: number = this.DUMMY_TASKS.length;


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
  get selectedUserTasks() {
    return this.loaded_tasks.filter((task) =>
      task.user_assigned.includes(this.id)
    );
  }
  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask(result: boolean){
    console.log("Executing onCloseAddTask from user-tasks!");
    this.isAddingTask = result;
    console.log(this.isAddingTask);
  }   
  newId = this.tasks_length+1;
  onAddNewTask(taskData: NewTaskData){
    this.DUMMY_TASKS.push({
      id: this.newId,
      title: taskData.title,
      description: taskData.summary,
      date: taskData.date,
      completed:false,
      user_assigned: [this.id]
    });
    this.isAddingTask = false;
    console.log(this.DUMMY_TASKS);
  }
}
