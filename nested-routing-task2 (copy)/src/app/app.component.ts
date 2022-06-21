import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task2 Nested-Routing';
  show: boolean = true;
  show2: boolean = true;
  show3: boolean = true;
  show4: boolean = true;
  show5: boolean = true;
  show6: boolean = true;


  hrms_button() {
    this.show = !this.show;
    this.show2 = true;
    this.show3 = true;
  }

  check_timetracker_on() {
    this.show4 = !this.show4;
    this.show5 = true;
    this.show6 = true;
  }

  timetracker_true() {
    this.show4 = true;
    this.show = true;
  }

  check_leave_on() {
    this.show5 = !this.show5;
    this.show4 = true;
    this.show6 = true;
  }

  leave_true() {
    this.show5 = true;
    this.show = true
  }

  check_payroll_on() {
    this.show6 = !this.show6;
    this.show5 = true;
    this.show4 = true;
  }

  payroll_true() {
    this.show6 = true;
    this.show = true;
  }

  pass_manage_button() {
    this.show = true;
    this.show3 = true;
    this.show2 = !this.show2;
  }

  toggl_button() {
    this.show = true;
    this.show2 = true;
    this.show3 = !this.show3;
  }

  show3_true() {
    this.show3 = true;
  }

  show2_true() {
    this.show2 = true;
  }

  leave_button() {
    this.show = true
  }
}
