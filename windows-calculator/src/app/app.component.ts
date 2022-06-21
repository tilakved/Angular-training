import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('Array')!) == null) {
      this.final = [];
    } else {
      this.final = JSON.parse(localStorage.getItem('Array')!)
    }
  }

  title = 'Windows Calculator';
  display: any = '';
  value: string = '0';
  flag: boolean = false;
  operation: string = '';
  val1: string = '';
  val2: string = '';
  final: any[] = [];
  obj1: string | undefined = '';
  obj2: string | undefined = '';

  newClearHistory() {
    this.final = [];
    // console.log(this.final)
  }

  clearAll() { //C - button
    this.display = '';
    this.value = '0';
  }

  clear() { //CE - button
    if (!this.display.includes("=")) {
      this.display = '';
    }
    this.value = '0';
  }

  backSpace() { //DEL - button
    this.value = this.value.slice(0, -1);
    if (this.value == '') {
      this.value = '0';
    }
  }

  all_operators(operators: string) { //all- operational - buttons
    let temp_operation = this.display[this.display.length - 1]
    // console.log(temp_operation)
    if (temp_operation == "+" || temp_operation == "-" || temp_operation == "/" || temp_operation == "*" || temp_operation == "%") {
      this.val1 = this.display.slice(0, -1);
      this.val2 = this.value;
      // console.log(this.val1 + this.operation + this.val2);
      if (temp_operation == '+') {
        this.value = String(Number(this.val1) + Number(this.val2));
      } else if (temp_operation == '-') {
        this.value = String(Number(this.val1) - Number(this.val2));
      } else if (temp_operation == 'x') {
        this.value = String(Number(this.val1) * Number(this.val2));
      } else if (temp_operation == '÷') {
        this.value = String(Number(this.val1) / Number(this.val2));
      } else if (temp_operation == '%') {
        this.value = String(Number(this.val1) % Number(this.val2));
      }
      // this.final.push(this.value,this.display + this.val2 + "=");
      this.final.push({obj1: this.display + " " + this.val2 + " =", obj2: this.value})
      localStorage.setItem('Array', JSON.stringify(this.final))
      // console.log(this.final);
      // this.display = this.value + operators;
    }

    if (this.value.includes('.')) {
    }
    this.display = Number(String(this.value)) + " " + operators;
    this.flag = true;
  }

  equalsTo(operator: string) { //equals-to - button

    let calculation = () => {
      if (this.operation == '+') {
        this.value = String(Number(this.val1) + Number(this.val2));
      } else if (this.operation == '-') {
        this.value = String(Number(this.val1) - Number(this.val2));
      } else if (this.operation == 'x') {
        this.value = String(Number(this.val1) * Number(this.val2));
      } else if (this.operation == '÷') {
        this.value = String(Number(this.val1) / Number(this.val2));
      } else if (this.operation == '%') {
        this.value = String(Number(this.val1) % Number(this.val2));
      }
    }
    if (this.display != '') {
      if (!this.display.includes("=")) {
        this.operation = this.display[this.display.length - 1]
        this.val1 = this.display.slice(0, -1);
        this.val2 = this.value;
        // console.log(this.val1 + this.operation + this.val2);
        this.display = this.display + " " + Number(String(this.value)) + " " + operator;
        calculation();
        // this.final.push(this.value,this.display);
        this.final.push({obj1: this.display, obj2: this.value});
        localStorage.setItem('Array', JSON.stringify(this.final))
        // console.log(this.final);
      } else {
        if (this.operation != undefined) {
          this.display = Number(String(this.value)) + " " + this.operation + " " + this.val2 + " " + operator;
          this.val1 = this.value;
          calculation();
          // this.final.push(this.value,this.display);
          this.final.push({obj1: this.display, obj2: this.value});
          localStorage.setItem('Array', JSON.stringify(this.final))
          // console.log(this.final);
        }
      }
    } else {
      alert("Give Proper input with operations")
    }
  }

  all_numbers(num: string) { //all - number - button
    if (this.display.includes("=")) {
      this.value = '0';
      this.display = '';
    }
    if (num == "." && this.value.includes(".")) {
      if (this.flag) {
        this.value = '';
        if (this.value == '' && num == '.') {
          this.value = '0';
        }
        this.value += num;
        this.flag = false;
      }
      if (this.value.includes(".")) {
        return;
      }
    } else {
      if (this.value == '0' && num == '.') {
        // console.log(this.value, num)
        this.value += num;
      } else {
        if (this.flag) {
          this.value = '';
          this.value += num;
          this.flag = false
        } else if (!this.flag) {
          if (this.value == "0") {
            this.value = '';
            this.value += num;
          } else {
            this.value += num;
          }
        }
      }
    }
  }

  onKeypress(event: any) { // binding
    //   event.preventDefault();
    //   console.log(event);
  }
}
