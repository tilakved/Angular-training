import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input() resultHistory: any[] | undefined; // input this.final
  @Output() newItemEvent = new EventEmitter<any>();// output event_emit

  ngOnInit() { /* initalization */
    // console.log(localStorage)
    // if (localStorage.length > 0) {
    //   this.resultHistory = JSON.parse(localStorage.getItem('Array')!)
    // } else {
    //   return
    // }
  }

  clearHistory() { //this is if clear history
    this.resultHistory = []
    this.newItemEvent.emit(this.resultHistory);
    localStorage.removeItem('Array');
  }
}
