import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../Service/hero.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public i: string | null | undefined;

  constructor(public hero: HeroService) {}

  ngOnInit(): void {}

}
