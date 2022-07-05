import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service"
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(public _service: AuthService, private route: Router, private notify: ToastrService) {
  }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    uname: new FormControl(''),
    password: new FormControl(''),
  })

  get f() {
    return this.loginForm.controls;
  }

  submitted = false;

  showSuccessToaster() {
    this.notify.success("Valid Authentication!!")
  }
  showErrorToaster() {
    this.notify.error("Invalid Authentication!!")
  }
  check(uname: any, pass: any) {
    this.submitted = true;
    if (this.loginForm.valid) {
      let output = this._service.login(uname, pass);
      if (output) {
        this._service.isAuthenticate = true
        this.route.navigate(['/inbox'])
        this.showSuccessToaster()
      } else {
        this.submitted = false
        this._service.isAuthenticate = false;
        this.loginForm.reset()
        this.showErrorToaster()
      }
    }
  }

  // showToasterSuccess() {
  //   this.notify.success("Data shown successfully !!", "tutsmake.com")
  //
  // }
}
