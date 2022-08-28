import { Component, Input, OnInit } from '@angular/core';
import { todos } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  constructor() { }
  @Input() data:any;
  ngOnInit(): void {

  }

  deleteItem(){
    var index =  todos.findIndex(x => x.id==this.data.id);
    todos.splice(index, 1)
  }

}
