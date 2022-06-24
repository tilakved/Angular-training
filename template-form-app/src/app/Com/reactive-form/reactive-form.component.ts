import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  title = 'reactive form'
  userName: any;
  fullName: any;
  address: any;
  email: any;
  password: any;
  formdata: any;

  constructor() {
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
      fullName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get new_user() {
    return this.formdata.get('userName');
  }

  get new_address() {
    return this.formdata.get('address');
  }

  get new_email() {
    return this.formdata.get('email');
  }

  get new_name() {
    return this.formdata.get('fullName');
  }

  get new_password() {
    return this.formdata.get('password')
  }

  onClickSubmit(data: any) {
    this.userName = data.userName
    this.address = data.address
    console.log("username", this.userName)
    console.log('address', this.address)
  }
}

