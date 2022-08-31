import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/body/about/about.component';
import { ChartComponent } from './components/body/chart/chart.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { TodoComponent } from './components/body/todo/todo.component';

const routes: Routes = [
    { path: '', component: TodoComponent },
  	{ path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
