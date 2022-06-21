import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../Service/hero.service";
import {DatePipe} from "@angular/common";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {
  public id: string | null | undefined;
  task_name: any ='';
  date: any = this.datePipe.transform(new Date(), 'M/dd/yyyy');
  textarea_notes: any | undefined | null;
  prior: string = 'Low';
  hide: boolean = false;
  @ViewChild(MatAccordion) accordion?: MatAccordion | undefined;

  constructor(public hero: HeroService, private route: ActivatedRoute, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    // if (JSON.parse(localStorage.getItem('Array')!) == null) {
    //   this.hero.names = [];
    // } else {
    //   this.hero.names = JSON.parse(localStorage.getItem('Array')!)
    // }
  }


  add_task_button() {
    this.prior = 'Low';
    this.textarea_notes = '';
    this.date = this.datePipe.transform(new Date(), 'M/dd/yyyy');
    // aria-expanded="true"
    if (this.task_name != '') {
      for (let x = 0; x < this.hero.names.length; x++) {
        if (this.hero.names[x].id == this.id) {
          //ADD ID
          let letters = 'ABCDEFGHIJKLMNOP';
          let task_name_id: string = '';
          let getRandomId = (): any => {
            for (let i = 0; i < 6; i++) {
              task_name_id += letters[Math.floor(Math.random() * 16)];
            }
            if (this.hero.task_name_arr_id.includes(task_name_id) == true) {
              getRandomId();
            } else {
              this.hero.task_name_arr_id.push(task_name_id)
              return task_name_id;
            }
          }
          getRandomId();

          this.hero.names[x].task_array.push(
            {
              name: this.task_name,
              id: task_name_id,
              note: this.textarea_notes,
              date: this.date,
              priority: this.prior,
              parentName: this.hero.names[x].name,
              parentId: this.hero.names[x].id
            }
          )
          localStorage.setItem('Array', JSON.stringify(this.hero.names))
          // console.log(localStorage)
        }
      }
      this.task_name = '';
      if (this.accordion) {
        this.accordion.closeAll();
      }
    }
  }

  today_button(index: number) {
    this.date = new Date();
    this.date = this.datePipe.transform(this.date, 'M/dd/yyyy');
    // console.log(this.date)
    for (let x = 0; x < this.hero.names.length; x++) {
      if (this.hero.names[x].id == this.id) {
        this.hero.names[x].task_array[index].date = this.date
        localStorage.setItem('Array', JSON.stringify(this.hero.names))
        // console.log(localStorage)
      }
    }
  }

  tomorrow_button(index: number) {
    let d = new Date();
    d.setDate(d.getDate() + 1);
    this.date = this.datePipe.transform(d, 'M/dd/yyyy');
    for (let x = 0; x < this.hero.names.length; x++) {
      if (this.hero.names[x].id == this.id) {
        this.hero.names[x].task_array[index].date = this.date
        localStorage.setItem('Array', JSON.stringify(this.hero.names))
        // console.log(localStorage)
      }
    }
  }

  save_button(index: number) {
    for (let x = 0; x < this.hero.names.length; x++) {
      if (this.hero.names[x].id == this.id) {
        this.hero.names[x].task_array[index].note = this.textarea_notes
        this.hero.names[x].task_array[index].date = this.datePipe.transform(this.date, 'M/dd/yyyy')
        this.hero.names[x].task_array[index].priority = this.prior
        // console.log("save", this.hero.names[x].task_array[index])
        localStorage.setItem('Array', JSON.stringify(this.hero.names))
        // console.log(localStorage)
      }
    }
  }

  delete_button(index: number) {
    for (let x = 0; x < this.hero.names.length; x++) {
      if (this.hero.names[x].id == this.id) {
        this.hero.names[x].task_array.splice(index, 1)
        localStorage.setItem('Array', JSON.stringify(this.hero.names))
        // console.log(localStorage)

      }
    }
  }

  onOptionsSelected($event: any, index: number) {
    for (let x = 0; x < this.hero.names.length; x++) {
      if (this.hero.names[x].id == this.id) {
        // console.log(this.prior,)
        if ($event.target.value == 'Low') {
          this.prior = 'Low'
        }
        if ($event.target.value == 'Medium') {
          this.prior = 'Medium'
        }
        if ($event.target.value == 'High') {
          this.prior = 'High'
        }
        this.hero.names[x].task_array[index].priority = this.prior
        // console.log("onchange", this.hero.names[x].task_array[index])
        localStorage.setItem('Array', JSON.stringify(this.hero.names))
        // console.log(localStorage)

      }
    }
  }

  fetch_data(index: number) {
    for (let x = 0; x < this.hero.names.length; x++) {
      if (this.hero.names[x].id == this.id) {
        this.textarea_notes = this.hero.names[x].task_array[index].note
        this.date = this.hero.names[x].task_array[index].date
        this.prior = this.hero.names[x].task_array[index].priority
      }
    }
  }

  onChangeDate($event: any, index: string | number) {
    this.date = this.datePipe.transform($event.value, 'M/dd/yyyy')
    for (let x = 0; x < this.hero.names.length; x++) {
      if (this.hero.names[x].id == this.id) {
        this.hero.names[x].task_array[index].date = this.date
        // console.log(this.hero.names[x].task_array[index])
      }
    }
  }

  onKeydown($event: KeyboardEvent) {
    if ($event.key === "Enter") {
      this.add_task_button();
    }
  }
}
