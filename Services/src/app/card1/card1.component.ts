import {Component, OnInit} from '@angular/core';
// import {MessageService} from "../appServices/message.service";
import {DesignutilitiesService} from "../appServices/designutilities.service";

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {
  product: any = 'xyz';

  constructor(private _msgService: DesignutilitiesService) {
  }

  ngOnInit(): void {
    this.product = this._msgService.products[1].name;
  }

  btnClick() {
    //static way
    // const msgServices = new MessageService();
    // msgServices.messageAlert();
    //dynamic way
    this._msgService.messageAlert();
  }


}
