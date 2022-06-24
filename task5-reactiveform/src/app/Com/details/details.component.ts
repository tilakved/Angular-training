import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  // animations: [
  //   trigger('slideInOut', [
  //     transition(':enter', [
  //       style({transform: 'translateX(100%)', opacity: 0}),
  //       animate('600ms ease-in', style({transform: 'translateX(0%)', 'opacity': 1}))
  //     ]),
  //
  //     transition(':leave', [
  //       style({transform: 'translateX(0%)', opacity: 1}),
  //       animate('0ms ease-in', style({transform: 'translateX(100%)', 'opacity': 0}))
  //     ])
  //   ]),
  // ]
})
export class DetailsComponent implements OnInit, AfterViewInit {

  constructor(private route: Router, public _liveAnnouncer: LiveAnnouncer) {
  }

  ngOnInit(): void {
  }
  // @ts-ignore
  data = JSON.parse(localStorage.getItem('Array'))

  logout() {
    localStorage.removeItem('username')
    this.route.navigate(['/login']);
  }

  displayedColumns: string[] = ['fname', 'lname', 'phone', 'email', 'address', 'zip'];
  dataSource = new MatTableDataSource(this.data);

  ngAfterViewInit(): void {
  }
}
