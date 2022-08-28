import { Component, OnInit } from '@angular/core';
import { todos } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  inputValue :any;
  todoLength:any;
  constructor() { }

  ngOnInit(): void {
    
  }
  getInputValue(value:string){
    this.inputValue = value;
    //console.warn(value)
  }
  addItem(){
    this.todoLength = todos.length
    todos.push({
      id: this.todoLength+1,
      title: this.inputValue
    })
    this.inputValue=""
  }

}
