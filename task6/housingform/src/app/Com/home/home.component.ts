import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HeroService} from "../../ser/hero.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  houseForm: any = FormGroup;
  update_check: boolean = true;

  constructor(private fb: FormBuilder, private _hero: HeroService) {
    this.houseForm = this.fb.group({
      houses: this.fb.array([])
    })
  }

  ngOnInit(): void {
    // console.log('hname',this.hname)
    if (this._hero.update_values != [] || this._hero.update_values != undefined) {
      this.update_function(this._hero.update_values, this._hero.update_index)
    }

  }

  houses(): FormArray {

    return this.houseForm.get("houses") as FormArray
  }

  newHouse(): FormGroup {
    return this.fb.group({
      houseName: ['', Validators.required],
      houseType: ['Small', Validators.required],
      houseId: this._hero.getRandomId(),
      address: this.fb.array([])
    })
  }

  addHouse() {
    this.update_check = false
    this.houses().push(this.newHouse());
  }

  address(index: number): FormArray {
    return this.houses().at(index).get('address') as FormArray
  }

  newAddress(): FormGroup {
    return this.fb.group({
      plotNo: ['', Validators.required],
      area: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      person: this.fb.array([])
    })
  }

  addAddress(index: number) {
    this.address(index).push(this.newAddress())
  }

  person(index: number, add_index: number): FormArray {
    return this.address(index).at(add_index).get('person') as FormArray
  }

  newPerson(): FormGroup {
    return this.fb.group({
      p_name: ['', Validators.required],
      p_age: ['', Validators.required],
      p_gender: ['Male', Validators.required],
    })
  }

  addPerson(index: number, add_index: number) {
    // this.show = true;
    this.person(index, add_index).push(this.newPerson())
  }

  get input() {
    return this.houseForm.get('max');
  }

  onSubmit(index: any) {
    if (this.update_check) {
      this._hero.final_arr.splice(this._hero.update_index, 1, this.houses().at(index).value)
      this._hero.final_arr = this._hero.final_arr.flat()
      localStorage.setItem('Array', JSON.stringify(this._hero.final_arr))
      alert('Your Data is Updated');
      this.houses().removeAt(index)
      this.update_check = false

    } else {
      this._hero.final_arr.push(this.houses().at(index).value)
      this._hero.final_arr = this._hero.final_arr.flat()

      localStorage.setItem('Array', JSON.stringify(this._hero.final_arr))
      alert('Your Data is Submitted');
      // this.houseForm.reset();
      this.houses().removeAt(index)

    }

  }

  removeHouse(index: number) {
    this.houses().removeAt(index)
  }

  update_function(update_values: any, i: any) {

    const data: any = this._hero.final_arr[i];
    const house = this.newHouse()
    house.patchValue({
      houseName: data.houseName,
      houseType: data.houseType,
      houseId: data.houseId
    });
    this.houses().push(house)

    data.address.forEach((a: any) => {
      const add = this.newAddress()
      add.patchValue({
        plotNo: a.plotNo,
        area: a.area,
        pinCode: a.pinCode
      });
      ((this.houseForm.controls['houses'] as FormArray).at(0).get('address') as FormArray).push(add);

    })

    for (let add_index in data.address) {
      // console.log('i', add_index);
      data.address[add_index].person.forEach((b: any) => {
        const per = this.newPerson()
        per.patchValue({
          p_name: b.p_name,
          p_age: b.p_age,
          p_gender: b.p_gender
        });
        (((this.houseForm.controls['houses'] as FormArray).at(0).get('address') as FormArray).at(Number(add_index)).get('person') as FormArray).push(per)
      })
    }
    // this._hero.update_values = [];
    // this._hero.update_index = '';
  }
}
