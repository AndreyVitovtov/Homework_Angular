import { Component } from '@angular/core';
import {Task} from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  flag = false;
  tasks: Array<Task> = [];
  inWork: Array<Task> = [];
  performed: Array<Task> = [];
  titleTask: string;
  descriptionTask: string;
  title: string;
  description: string;

  constructor() {
    this.setTasks();
  }

  setTasks(): void {
    for (let i = 1; i <= 10; i++) {
      const task = new Task();
      task.title = 'Title ' + i;
      task.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deleniti error, esse exercitationem ' +
        'illum incidunt ipsa ipsam iste, magni maiores molestiae nostrum obcaecati quis voluptas? Delectus nostrum omnis praesentium.';

      this.tasks.push(task);
    }
  }

  tasksToInWork(task): void {
    for (let i = this.tasks.length - 1; i >= 0; i--) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
        break;
      }
    }
    this.inWork.push(task);
  }

  inWorkToTasks(task): void {
    for (let i = this.inWork.length - 1; i >= 0; i--) {
      if (this.inWork[i] === task) {
        this.inWork.splice(i, 1);
        break;
      }
    }
    this.tasks.push(task);
  }

  performedToInWork(task): void {
    for (let i = this.performed.length - 1; i >= 0; i--) {
      if (this.performed[i] === task) {
        this.performed.splice(i, 1);
        break;
      }
    }
    this.inWork.push(task);
  }

  tasksToPerformed(task): void {
    for (let i = this.inWork.length - 1; i >= 0; i--) {
      if (this.inWork[i] === task) {
        this.inWork.splice(i, 1);
        break;
      }
    }
    this.performed.push(task);
  }

  // tslint:disable-next-line:typedef
  readTask(task) {
    this.title = task.title;
    this.description = task.description;
    // alert(task.description);
  }

  // tslint:disable-next-line:typedef
  addTask(title: string, description: string) {
    if (title.length === 0 || title.trim() === '' || description.length === 0 || description.trim() === '') { return; }
    const task = new Task();
    task.title = title;
    task.description = description;
    this.tasks.push(task);
    this.titleTask = '';
    this.descriptionTask = '';
  }

  deleteTask(task: Task): void {
    for (let i = this.tasks.length - 1; i >= 0; i--) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
        break;
      }
    }
    this.title = '';
    this.description = '';
  }
}
