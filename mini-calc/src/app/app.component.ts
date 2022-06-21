import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-calculator';
  value1: string = '';
  value2: string = '';
  result: number = 0;
  operations = (operators: any) => {
    let x;
    let y;
    y = Number(this.value2.trim());
    x = Number(this.value1.trim());

    // console.log("val1", this.value1, typeof (this.value1))
    // console.log("val2",this.value2)
    // console.log(this.value1+this.value2)
    // console.log(x,y)
    if (!isNaN(x) && !isNaN(y)) {
      if (operators == 'add') {
        this.result = x + y;
      } else if (operators == 'sub') {
        this.result = x - y;
      } else if (operators == 'divide') {
        this.result = x / y;
      } else if (operators == 'multiply') {
        this.result = x * y;
      }
    }
    // console.log(this.result)
  }
}
