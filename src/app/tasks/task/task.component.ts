import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type task } from './task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  id!: number;
  title!: String;
  description!: String;
  completed!: boolean;
  isAddingNewTask: boolean = false;
  testDate:String = '2025-11-21';
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
  @Input({ required: true }) set UserTaskValue(user_task: task) {
    this.id = user_task.id;
    this.title = user_task.title;
    this.description = user_task.description;
    this.completed = user_task.completed;
  }
  @Output() completeTask = new EventEmitter<number>();
  onCompleteTask(){
    this.completeTask.emit(this.id);
  }
}
