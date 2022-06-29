import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  letters = '0123456789ABCDEF';
  private id: any = '';
  arr_id: any = []
  final_arr: any = []
  update_values: any = []
  update_index: any = []

  constructor() {
  }

  getRandomId = (): any => {
    this.id = '';
    for (let i = 0; i < 7; i++) {
      this.id += this.letters[Math.floor(Math.random() * 16)];
    }
    if (this.arr_id.includes(this.id) == true) {
      this.getRandomId();
    } else {
      this.arr_id.push(this.id)
      // console.log(this.hero.arr_id)
      return this.id;
    }
  }
}
