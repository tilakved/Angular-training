import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'template driven';

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickSubmit(result: any) {
    console.log("You have entered : " + result.username);
  }

  log(x:any) {
    console.log(x)
  }
}
