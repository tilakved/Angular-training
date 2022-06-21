import {Component, OnInit} from '@angular/core';
// import {MessageService} from "../appServices/message.service";
import {DesignutilitiesService} from "../appServices/designutilities.service";

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
  product: any = 'asd';

  constructor(private _msgService: DesignutilitiesService) {
  }

  ngOnInit(): void{
  this.product = this._msgService.products[0].id;
  }

  btnClick() {
    this._msgService.messageAlert();

  }
}
