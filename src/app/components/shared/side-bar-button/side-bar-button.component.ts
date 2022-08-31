import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar-button',
  templateUrl: './side-bar-button.component.html',
  styleUrls: ['./side-bar-button.component.css']
})
export class SideBarButtonComponent implements OnInit {
  @Input() text :string;
  @Output() onClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickbutton() {
    this.onClick.emit();
  }

}
