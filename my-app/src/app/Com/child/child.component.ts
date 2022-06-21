import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name:string='peter';
  constructor() { }

  ngOnInit(): void {
  }
  count: number = 0;
  parent($event: any) {
    alert("heyy"+this.name)
    console.log(this.count)
    this.count++;
  }
}
