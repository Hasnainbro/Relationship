import { Component } from '@angular/core';
import { alert, prompt } from '@nativescript/core';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sharedGoals: string[] = ['Have our Own Flat'];
  todoList: Todo[] = [{ title: 'Meet Her At 6', completed: false }];
  reunionCountdown: number = 0;

  onTap(feature: string): void {
    alert({
      title: "Feature Not Available",
      message: `${feature} is coming soon!`,
      okButtonText: "OK"
    });
  }

  addGoal(): void {
    prompt({
      title: "Add New Goal",
      message: "Enter a new shared goal:",
      okButtonText: "Add",
      cancelButtonText: "Cancel",
      inputType: "text"
    }).then((result) => {
      if (result.result && result.text) {
        this.sharedGoals.push(result.text);
      }
    });
  }

  addTodo(): void {
    prompt({
      title: "Add New Todo",
      message: "Enter a new todo item:",
      okButtonText: "Add",
      cancelButtonText: "Cancel",
      inputType: "text"
    }).then((result) => {
      if (result.result && result.text) {
        this.todoList.push({ title: result.text, completed: false });
      }
    });
  }

  toggleTask(task: Todo): void {
    task.completed = !task.completed;
  }

  editCountdown(): void {
    prompt({
      title: "Edit Countdown",
      message: "Enter the number of days until reunion:",
      okButtonText: "Set",
      cancelButtonText: "Cancel",
      inputType: "number"
    }).then((result) => {
      if (result.result && result.text) {
        this.reunionCountdown = parseInt(result.text, 10);
      }
    });
  }
}