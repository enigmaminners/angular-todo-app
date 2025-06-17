import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  standalone: false,
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css'
})
export class TodoApp {
task = '';
taskList: string[] = [];

addTask() {
this.taskList.push(this.task);
this.task = "";
}

deleteTask(index: number) {
  this.taskList.splice(index, 1);
}
}
