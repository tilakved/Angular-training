import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  // ngOnInit(): void {
  // }
  id: any | null | undefined;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log("123")
    this.route.paramMap.subscribe((params: ParamMap) => {
      // console.log(params.get('id'))
      this.id = params.get('id');
    });
  }
}


