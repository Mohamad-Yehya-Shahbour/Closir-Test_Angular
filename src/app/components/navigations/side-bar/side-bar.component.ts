import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit(): void {
  }

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
