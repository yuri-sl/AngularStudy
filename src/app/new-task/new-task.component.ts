import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../tasks/task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() CloseNewTaskEvent = new EventEmitter<boolean>();
  @Output() AddNewTaskEvent = new EventEmitter<NewTaskData>();
  onCloseTask(){
    this.CloseNewTaskEvent.emit(false);
  }
  enteredTitle:string = '';
  enteredSummary: string = '';
  enteredDate:string = '';

  onSubmit(){
    this.AddNewTaskEvent.emit({
      title: this.enteredTitle,
      summary: this.enteredDate,
      date: this.enteredDate
    });
    console.log("The data has been sent!")
    console.log(this.enteredTitle,this.enteredSummary,this.enteredDate);

  }
}
