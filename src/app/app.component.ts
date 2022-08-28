import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'closir-test';
  constructor(
    public router: Router,
  ){}

  navigateToContact(){
    this.router.navigate(['contact']);
  }
  navigateToChart(){
    this.router.navigate(['chart']);
  }
  navigateToAbout(){
    this.router.navigate(['about']);
  }
  navigateToTodo(){
    this.router.navigate(['']);
  }

}
