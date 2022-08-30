import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() message :string;
  @Input() data:any
  @Output() onClick = new EventEmitter<any>();

  
  constructor() { }

  ngOnInit(): void {
    
  }

  onClickbutton() {
    this.onClick.emit();
  }

}
