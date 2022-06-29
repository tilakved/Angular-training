import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../ser/hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  title = "Form Details";
  constructor(public _hero: HeroService, private route: Router) {
  }

  ngOnInit(): void {
    this._hero.update_index = ''
    this._hero.update_values = [];
    // @ts-ignore
    this._hero.final_arr = JSON.parse(localStorage.getItem('Array'))
    // console.log(this._hero.final_arr)

  }

  updateBtn(update_index: number, house: any) {
    // console.log(update_index)
    // console.log(house)
    this._hero.update_index = update_index
    this._hero.update_values = house
    this.route.navigate(['/home']);

  }
}
