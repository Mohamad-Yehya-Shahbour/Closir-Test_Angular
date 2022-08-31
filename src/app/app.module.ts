import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { TodoComponent } from './components/body/todo/todo.component';
import { ChartComponent } from './components/body/chart/chart.component';
import { AboutComponent } from './components/body/about/about.component';
import { TodoInputComponent } from './components/body/todo/todo-input/todo-input.component';
import { TodoListComponent } from './components/body/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './components/body/todo/todo-item/todo-item.component';
import { XyChartComponent } from './components/body/chart/xy-chart/xy-chart.component';
import { PieChartComponent } from './components/body/chart/pie-chart/pie-chart.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { GaugeChartComponent } from './components/body/chart/gauge-chart/gauge-chart.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { TopBarComponent } from './components/navigations/top-bar/top-bar.component';
import { SideBarComponent } from './components/navigations/side-bar/side-bar.component';
import { SideBarButtonComponent } from './components/shared/side-bar-button/side-bar-button.component';


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
    TopBarComponent,
    SideBarComponent,
    SideBarButtonComponent
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
