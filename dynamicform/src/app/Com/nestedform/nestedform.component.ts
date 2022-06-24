import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.scss']
})
export class NestedformComponent implements OnInit {
  title = "Nested Form"
  nestedForm: FormGroup;
  city: any = 'Rajkot'

  constructor(private fb: FormBuilder) {

    this.nestedForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.nestedForm.value);
  }

  updateForm() {
      this.nestedForm.patchValue({
        fname: 'Nancy',
        address: {
          street: '123 Drew Street',
          zip:'123456'
        }
      });
    this.nestedForm.controls['address'].setValue({
    street:this.city,
      city:this.city,
      state:this.city,
      zip:this.city
    });


  }
}
