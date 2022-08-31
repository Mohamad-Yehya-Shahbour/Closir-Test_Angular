import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { XyChartComponent } from './components/chart/xy-chart/xy-chart.component';
import { PieChartComponent } from './components/chart/pie-chart/pie-chart.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { GaugeChartComponent } from './components/chart/gauge-chart/gauge-chart.component';
import { AlertComponent } from './components/shared/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ContactComponent,
    ChartComponent,
    AboutComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoItemComponent,
    XyChartComponent,
    PieChartComponent,
    ButtonComponent,
    GaugeChartComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA , CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
