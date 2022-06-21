import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnChanges, DoCheck {

  isChild = true;
  channelName =''

  constructor() {
    console.log("parent constructor");
  }

  ngOnChanges(): void {
    console.log("Parent Onchanges is called");
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("parent ngOnIni t");
  }
  ngDoCheck():void {
    console.log("parent docheck is called")
  }

  toggleChild(){
    this.isChild = !this.isChild //making true false by current value
  }
}

