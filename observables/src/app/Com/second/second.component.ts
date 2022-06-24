import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  wah: string = "Null";

  constructor(private hero: HeroService) {
  }

  ngOnInit(): void {
    if (this.hero.old_number > this.hero.new_number) {
      this.wah = "Decrement";
      console.log("Decrement")
    } else if (this.hero.old_number < this.hero.new_number) {
      this.wah = "Increment";
      console.log("Increment")
    }
  }

}
