export interface task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  user_assigned: string[];
}

export interface NewTaskData{
  title:string;
  summary:string;
  date:string;
}