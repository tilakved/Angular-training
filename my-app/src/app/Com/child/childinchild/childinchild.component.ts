import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-childinchild',
  templateUrl: './childinchild.component.html',
  styleUrls: ['./childinchild.component.css']
})
export class ChildinchildComponent implements OnInit {

  @Input() userName: string | undefined;
  constructor() {

  }
  ngOnInit(): void {  }

  @Output() childEvent = new EventEmitter();

  event(){
    console.log("tilak here")
    this.childEvent.emit();
  }

}


