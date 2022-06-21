import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-second',
  template: `
    <p>child works!</p>
    <div>
    <h3>{{channelName}}</h3>
  </div>

  <!--  <app-child></app-child>-->

  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class SecondComponent implements OnInit,OnDestroy,OnChanges, DoCheck {
  counter =0
  countdown: number | undefined;
  @Input()
  channelName=''

  constructor() {
    console.log("child constructor");
  }

  ngOnInit(): void {
    console.log("child ngoninit");
    // this.countdown= setInterval(()=>{
    //   this.counter ++
    //   console.log(this.counter);
    // },100)
  }

  ngOnDestroy(): void {
    // clearInterval(this.countdown);
    console.log("child OnDestroy is called");
  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes)
    console.log("Child Onchanges is called");
  //   // throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    console.log("child docheck is called")
  }
}

import {colors} from "@angular/cli/utilities/color";
