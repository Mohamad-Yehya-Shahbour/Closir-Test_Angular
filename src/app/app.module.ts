import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { TodoComponent } from './components/todo/todo.component';
import { ChartComponent } from './components/chart/chart.component';
import { AboutComponent } from './components/about/about.component';
import { TodoInputComponent } from './components/todo/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ContactComponent,
    ChartComponent,
    AboutComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
