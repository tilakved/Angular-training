import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  num: number = 0;

  constructor(private hero: HeroService) {
  }

  ngOnInit(): void {
    this.num = this.hero.new_number
  }

  Incre() {
    this.hero.old_number = this.num
    this.num++
    this.hero.new_number = this.num
  }

  Decre() {
    this.hero.old_number = this.num
    this.num--
    this.hero.new_number = this.num

  }
}
