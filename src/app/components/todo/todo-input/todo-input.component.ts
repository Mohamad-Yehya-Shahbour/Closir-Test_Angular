import { Component, OnInit } from '@angular/core';
import { todos } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  inputValue :string = "";
  todoLength:any;
  showAlert: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  getInputValue(value:string){
    this.inputValue = value;
  }

  addItem(){
    // should handle empty array condition

    if (this.inputValue === ""){
      this.showAlert = true;
      return
    }

    this.todoLength = todos.length
    var tempitem = todos[this.todoLength-1]
    
    todos.push({
      id: tempitem.id+1,
      title: this.inputValue
    })
    this.inputValue=""
  }

}
