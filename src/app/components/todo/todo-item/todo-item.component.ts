import { Component, Input, OnInit } from '@angular/core';
import { todos } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() data:any;
  editTodo : boolean = false;
  showAlert : boolean = false;
  updateInputValue :string = "";

  constructor() { }
  
  ngOnInit(): void {

  }

  getUpdateInputValue(value:string){
    this.updateInputValue = value;
    console.warn(this.updateInputValue)
  }

  deleteItem(){
    var index =  todos.findIndex(x => x.id==this.data.id);
    todos.splice(index, 1)
  }

  updateItem(){
    if (this.updateInputValue === ""){
      this.showAlert = true;
      return
    }
    var index =  todos.findIndex(x => x.id==this.data.id);
    todos[index]={id: this.data.id, title:this.updateInputValue}
  }

  updateToggle(){
    this.editTodo = !this.editTodo;
  }

}
