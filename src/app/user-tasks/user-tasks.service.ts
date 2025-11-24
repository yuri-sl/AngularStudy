import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
class TasksService{
    public DUMMY_TASKS = [
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


    getUserTasks(userId: string) {
        return this.DUMMY_TASKS.filter((task) => task.user_assigned.includes(userId))
    }
    /*
        addTask(taskData: NewTaskData, userId: string){
            const newId = this.DUMMY_TASKS.length + 1
            this.DUMMY_TASKS.unshift({
                id: newId,
                title: taskData.title,
                description: taskData.summary,            
                dueDate: taskData.date
            })
        }
    */
    removeTask(id:number){
        this.DUMMY_TASKS = this.DUMMY_TASKS.filter((task)=> task.id != id)
    }
}