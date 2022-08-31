import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-button',
  templateUrl: './side-bar-button.component.html',
  styleUrls: ['./side-bar-button.component.css']
})
export class SideBarButtonComponent implements OnInit {
  @Input() text :string;
  @Output() onClick = new EventEmitter<any>();
  constructor(public router: Router,) { }

  ngOnInit(): void {
  }

  onClickbutton() {
    this.onClick.emit();
  }

  navigate(){
    if(this.text=="Contact"){
      this.router.navigate(['contact']);
    }
    if(this.text=="About"){
      this.router.navigate(['about']);
    }
    if(this.text=="Todo"){
      this.router.navigate(['']);
    }
    if(this.text=="Charts"){
      this.router.navigate(['chart']);
    }
  }

}
