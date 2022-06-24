import {Component} from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name = 'Soap';

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      quantities: this.fb.array([]),
    });
  }

  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(index: number) {
    this.quantities().removeAt(index);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  update() {
    this.productForm.controls['name'].setValue(this.name);
  }
}
