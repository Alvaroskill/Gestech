import { Injectable } from '@angular/core';
import { Task } from '../models/task.module';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public _tasks: Task[] = [
  {
    id:0,
    taskName:'Limpiar los platos',
    taskDescription:'Es importante tener una vajilla limpia',
    taskDifficulty:'Baja',
    taskTimeInSecs: '500',
    taskImage: '',
  },
  {
    id:1,
    taskName:'Revisar inventario',
    taskDescription:'No es una tarea muy compleja, y ademas, es importante tener tosdo ordenado.',
    taskDifficulty:'Media',
    taskTimeInSecs:'3600',
    taskImage: '',
  },
  {
    id:2,
    taskName:'Realizar Entrevistas',
    taskDescription:'Es muy dificil detectar al empleado idonio para la empresa, por eso es de vital importancia hacerle una entrevista.',
    taskDifficulty:'Baja',
    taskTimeInSecs:'7200',
    taskImage: '',
  },

  ]

  id:number = this._tasks.length+1;

  constructor() { }

  public getTasks(): Task[] {
    return this._tasks;
  }

  public getTasksById(id: number): Task{
    return this._tasks[id];
  }

  addTask(task:Task){
    task.id = this.id++;
    this._tasks.push(task);
  }

  updateTask(task:Task){
    var _task = this._tasks.find(p=>p.id==task.id);
    if(_task){
      _task.taskName = task.taskName;
      _task.taskDescription = task.taskDescription;
      _task.taskDifficulty = task.taskDifficulty;
      _task.taskTimeInSecs = task.taskTimeInSecs;
      _task.taskImage = task.taskImage;
    }
    
  }

  deleteTaskById(id:number){
    this._tasks = this._tasks.filter(p=>p.id != id); 
  }
}




/*import { Injectable } from '@angular/core';
import { Task } from '../models/task.module';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks:Task[] = [
    {
      id:1,
      name:"Do the dishes",
      difficulty: "Easy",
      timeInSecs:3600,
      image:''
    },
    {
      id:2,
      name:"Clean the house",
      difficulty: "Medium",
      timeInSecs:5400,
      image:''
    }
  ];

  id:number = this.tasks.length+1;
  constructor() {

  }

  getTasks(): Task[]{
    return this.tasks;
  }

  getTaskById(id:number) : Task{
    return this.tasks.find(t=>t.id==id);
  }

  deleteTaskById(id:number){
    this.tasks = this.tasks.filter(t=>t.id != id); 
  }

  addTask(tasks:Task){
    tasks.id = this.id++;
    this.tasks.push(tasks);
  }

  updateTask(tasks:Task){
    var _task = this.tasks.find(t=>t.id==tasks.id);
    if(_task){
      _task.name = tasks.name;
      _task.timeInSecs = tasks.timeInSecs;
    }
    
  }
}*/
