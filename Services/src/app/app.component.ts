import { Component, OnInit } from '@angular/core';
import {DesignutilitiesService} from "./appServices/designutilities.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products:any={};
  constructor(private _msgService:DesignutilitiesService) { }

  ngOnInit(): void {
    this.products = this._msgService.products
  }

}
