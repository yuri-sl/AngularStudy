import { Component, Input } from '@angular/core';
import { task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  id!: number;
  title!: String;
  description!: String;
  completed!: boolean;
  @Input({ required: true }) set UserTaskValue(user_task: task) {
    this.id = user_task.id;
    this.title = user_task.title;
    this.description = user_task.description;
    this.completed = user_task.completed;
  }
}
