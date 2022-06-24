import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DetailsService} from "../../details.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formdata: any;
  fname: any;
  lname: any;
  address: any;
  phone: any;
  email: any;
  zip: any;

  constructor(public ds: DetailsService) {
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[6-9][0-9]{9}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      zip: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]{6}$')])
    });
  }

  get new_fname() {
    return this.formdata.get('fname');
  }

  get new_lname() {
    return this.formdata.get('lname');
  }

  get new_phone() {
    return this.formdata.get('phone');
  }

  get new_email() {
    return this.formdata.get('email')
  }

  get new_address() {
    return this.formdata.get('address');
  }

  get new_zip() {
    return this.formdata.get('zip')
  }

  onClickSubmit(value: any) {
    // console.log(value);
    this.ds.fullDetails.push(value)
    localStorage.setItem("Array", JSON.stringify(this.ds.fullDetails));
    console.log(localStorage)
    this.formdata.reset();
    alert('Your Data is Saved')
  }
}
