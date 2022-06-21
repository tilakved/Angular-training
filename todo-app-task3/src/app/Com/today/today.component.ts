import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../Service/hero.service";
import {DatePipe} from "@angular/common";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  today_date: any = this.datePipe.transform(new Date(), 'M/dd/yyyy');
  final_today_arr: any = [];
  task_name: any = '';
  date: any = this.datePipe.transform(new Date(), 'M/dd/yyyy');
  textarea_notes: any = '';
  prior: string = 'Low';
  @ViewChild(MatAccordion) accordion?: MatAccordion | undefined;
  public id: string | null | undefined;
  workspace_selected_option: any = '';
  private parent_details: any = [];

  constructor(public hero: HeroService, private route: ActivatedRoute, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.hero.names.length; i++) {
      for (let j = 0; j < this.hero.names[i].task_array.length; j++) {
        // console.log(this.temp_today[i].task_array[j])
        if (this.hero.names[i].task_array[j].date == this.today_date) {

          this.final_today_arr.push(this.hero.names[i].task_array[j])
        }
      }
    }
    // console.log(this.parent_details)
  }

  onKeydown($event: KeyboardEvent) {
    if ($event.key === "Enter") {
      this.add_task_button();
    }
  }

  add_task_button() {
    this.prior = 'Low';
    this.textarea_notes = '';
    this.date = this.datePipe.transform(new Date(), 'M/dd/yyyy')
    // console.log(this.workspace_selected_option)
    if (this.task_name != '' && this.workspace_selected_option != '') {

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


      for (let i = 0; i < this.hero.names.length; i++) {
        if (this.hero.names[i].id == this.workspace_selected_option) {
          this.hero.names[i].task_array.push(
            {
              name: this.task_name,
              id: task_name_id,
              note: this.textarea_notes,
              date: this.date,
              priority: this.prior,
              parentName: this.hero.names[i].name,
              parentId: this.workspace_selected_option,
            }
          )
          this.final_today_arr.push(
            {
              name: this.task_name,
              id: task_name_id,
              note: this.textarea_notes,
              date: this.date,
              priority: this.prior,
              parentName: this.hero.names[i].name,
              parentId: this.workspace_selected_option,
            }
          )
        }
        this.hero.final_today_arr = this.final_today_arr
        localStorage.setItem('Array', JSON.stringify(this.hero.names))
        // console.log(localStorage)
      }
    }
    this.task_name = '';
    if (this.accordion) {
      this.accordion.closeAll();
    }
  }

  fetch_data(x: any) {
    this.textarea_notes = x.note;
    this.date = x.date;
    this.prior = x.priority;
  }

  delete_button(x: any, index: number) {
    for (let j = 0; j < this.hero.names.length; j++) {
      for (let k = 0; k < this.hero.names[j].task_array.length; k++) {
        if (x.id == this.hero.names[j].task_array[k].id) {
          let temp_index = this.hero.names[j].task_array[k].index
          // console.log(this.hero.names[j].task_array[k])
          this.hero.names[j].task_array.splice(temp_index, 1)
          this.final_today_arr.splice(index, 1)
          localStorage.setItem('Array', JSON.stringify(this.hero.names))
          this.hero.final_today_arr = this.final_today_arr
          // console.log(localStorage)
        }
      }
    }
  }

  save_button(x: any) {
    for (let j = 0; j < this.hero.names.length; j++) {
      for (let k = 0; k < this.hero.names[j].task_array.length; k++) {
        if (x.id == this.hero.names[j].task_array[k].id) {
          this.hero.names[j].task_array[k].note = this.textarea_notes
          this.hero.names[j].task_array[k].date = this.datePipe.transform(this.date, 'M/dd/yyyy')
          this.hero.names[j].task_array[k].priority = this.prior
          this.hero.final_today_arr = this.final_today_arr
          localStorage.setItem('Array', JSON.stringify(this.hero.names))
          // console.log(localStorage)
        }

      }
    }
  }

  today_button(x: any) {
    this.date = this.datePipe.transform(new Date(), 'M/dd/yyyy');
    x.date = this.date
    this.save_button(x)
    this.ngOnInit()
  }

  tomorrow_button(x: any) {
    let d = new Date();
    d.setDate(d.getDate() + 1);
    this.date = this.datePipe.transform(d, 'M/dd/yyyy');
    x.date = this.date

    this.save_button(x)
    this.final_today_arr=[]
    this.ngOnInit()
  }
}
