import { Component, OnInit } from '@angular/core';
import { todos } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos :any;
  constructor() { }

  ngOnInit(): void {
    this.todos = todos
  }

}
