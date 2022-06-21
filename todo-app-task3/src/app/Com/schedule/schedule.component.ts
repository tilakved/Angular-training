import {Component, OnInit, ViewChild} from '@angular/core';
import {HeroService} from "../../Service/hero.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  task_name: any = '';
  date: any = this.datePipe.transform(new Date(), 'M/dd/yyyy');
  textarea_notes: any = '';
  prior: string = 'Low';
  @ViewChild(MatAccordion) accordion?: MatAccordion | undefined;
  id: string | null | undefined;
  workspace_selected_option: any = ''

  new_schedule_sequence: any = [
    {ss_name: 'Older', ss_array: []},
    {ss_name: 'Today', ss_array: []},
    {ss_name: 'Tomorrow', ss_array: []},
    {ss_name: 'Sunday', ss_array: []},
    {ss_name: 'Monday', ss_array: []},
    {ss_name: 'Tuesday', ss_array: []},
    {ss_name: 'Wednesday', ss_array: []},
    {ss_name: 'Thursday', ss_array: []},
    {ss_name: 'Friday', ss_array: []},
    {ss_name: 'Saturday', ss_array: []},
    {ss_name: 'Next Week', ss_array: []},
    {ss_name: 'January', ss_array: []},
    {ss_name: 'February', ss_array: []},
    {ss_name: 'March', ss_array: []},
    {ss_name: 'April', ss_array: []},
    {ss_name: 'May', ss_array: []},
    {ss_name: 'June', ss_array: []},
    {ss_name: 'July', ss_array: []},
    {ss_name: 'August', ss_array: []},
    {ss_name: 'September', ss_array: []},
    {ss_name: 'November', ss_array: []},
    {ss_name: 'December', ss_array: []},
    {ss_name: 'Older', ss_array: []},
    {ss_name: 'Next Year', ss_array: []}]

  days_of_week: any = [this.new_schedule_sequence[3], this.new_schedule_sequence[4].ss_array, this.new_schedule_sequence[5].ss_array, this.new_schedule_sequence[6].ss_array, this.new_schedule_sequence[7].ss_array, this.new_schedule_sequence[8].ss_array, this.new_schedule_sequence[9].ss_array]
  months_of_year: any = [this.new_schedule_sequence[11].ss_array, this.new_schedule_sequence[12].ss_array, this.new_schedule_sequence[13].ss_array, this.new_schedule_sequence[14].ss_array, this.new_schedule_sequence[15].ss_array, this.new_schedule_sequence[16].ss_array, this.new_schedule_sequence[17].ss_array, this.new_schedule_sequence[18].ss_array, this.new_schedule_sequence[19].ss_array, this.new_schedule_sequence[20].ss_array, this.new_schedule_sequence[21].ss_array, this.new_schedule_sequence[12].ss_array]

  temp_arr: any = []

  // month_name: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  constructor(public hero: HeroService, private route: ActivatedRoute, private datePipe: DatePipe) {
  }

  ngOnInit() {
    // this.getAllData();
    for (let i = 0; i < this.new_schedule_sequence.length; i++) {
      this.new_schedule_sequence[i].ss_array = [];
      console.log(this.new_schedule_sequence)
    }
    let current_date: any = this.datePipe.transform(new Date(), 'M/dd/yyyy')
    this.temp_arr = this.hero.names

    for (let i = 0; i < this.temp_arr.length; i++) {
      for (let j = 0; j < this.temp_arr[i].task_array.length; j++) {

        //-------------next year
        let fullYear = new Date(this.temp_arr[i].task_array[j].date).getFullYear();
        if (fullYear > new Date().getFullYear()) {
          this.new_schedule_sequence[23].ss_array.push(this.temp_arr[i].task_array[j])
          // console.log(this.new_schedule_sequence[23])
        }

        //------------------------- older
        if (this.temp_arr[i].task_array[j].date < current_date) { //older
          this.new_schedule_sequence[0].ss_array.push(this.temp_arr[i].task_array[j])
          // this.temp_arr[i].task_array.splice(j, 1)
        }

        // --------------------------today
        if (this.temp_arr[i].task_array[j].date === current_date) { //today
          this.new_schedule_sequence[1].ss_array.push(this.temp_arr[i].task_array[j])
          // console.log('today', this.hero.names[i].task_array[j].date)
        }

        //---------------tomorrow
        let d = new Date();
        d.setDate(d.getDate() + 1);
        let tomorrow: any = this.datePipe.transform(d, 'M/dd/yyyy');

        if (this.temp_arr[i].task_array[j].date == tomorrow) { //tomorrow
          this.new_schedule_sequence[2].ss_array.push(this.temp_arr[i].task_array[j])
          // console.log('tomorrow', this.hero.names[i].task_array[j].date)
        }

        //---------------all day of current week
        let curr = new Date; // get current date
        let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        let last = first + 6; // last day is the first day + 6
        let lastDay: any = this.datePipe.transform(new Date(curr.setDate(last)), 'M/dd/yyyy')

        if (this.temp_arr[i].task_array[j].date > tomorrow && this.temp_arr[i].task_array[j].date < lastDay && lastDay != tomorrow) {
          let day = new Date(this.temp_arr[i].task_array[j].date).getDay()
          this.days_of_week[day].push(this.temp_arr[i].task_array[j])
        }

        //all month of the year
        let month = new Date(this.temp_arr[i].task_array[j].date).getMonth()
        if (month >= new Date().getMonth() && this.temp_arr[i].task_array[j].date > lastDay && fullYear === new Date().getFullYear()) {
          this.months_of_year[month].push(this.temp_arr[i].task_array[j])
        }
      }
    }
  }


  add_task_button() {
    this.prior = 'Low';
    this.textarea_notes = '';
    this.date = this.datePipe.transform(new Date(), 'M/dd/yyyy')
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
          this.new_schedule_sequence[1].ss_array.push(
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
          localStorage.setItem('Array', JSON.stringify(this.hero.names))
          this.ngOnInit();
        }
      }
    }
    this.task_name = '';
    if (this.accordion) {
      this.accordion.closeAll();
    }
  }

  onKeydown($event: KeyboardEvent) {
    if ($event.key === "Enter") {
      this.add_task_button();
    }
  }

  fetch_data(x: any) {
    // console.log(x)
    this.textarea_notes = x.note;
    this.date = x.date;
    this.prior = x.priority;
  }

  save_button(x: any) {
    for (let j = 0; j < this.hero.names.length; j++) {
      for (let k = 0; k < this.hero.names[j]?.task_array?.length; k++) {
        if (x.id == this.hero.names[j]?.task_array[k].id) {

          this.hero.names[j].task_array[k].note = this.textarea_notes
          this.hero.names[j].task_array[k].date = this.datePipe.transform(this.date, 'M/dd/yyyy')
          this.hero.names[j].task_array[k].priority = this.prior
          // console.log(this.hero.names[j].task_array[k].note)
          this.temp_arr[j].task_array[k].note = this.textarea_notes
          this.temp_arr[j].task_array[k].date = this.datePipe.transform(this.date, 'M/dd/yyyy')
          this.temp_arr[j].task_array[k].priority = this.prior
          localStorage.setItem('Array', JSON.stringify(this.hero.names))
          this.ngOnInit()
        }
      }
    }
  }

  delete_button(x: any, index: number) {
    for (let j = 0; j < this.hero.names.length; j++) {
      for (let k = 0; k < this.hero.names[j]?.task_array.length; k++) {
        // console.log(this.hero.names[j].task_array)
        if (x.id == this.hero.names[j]?.task_array[k].id) {
          let temp_index = this.hero.names[j].task_array[k].index
          this.hero.names[j].task_array.splice(temp_index, 1)
          this.temp_arr[j].task_array.splice(index, 1)
          localStorage.setItem('Array', JSON.stringify(this.hero.names))
          console.log(this.temp_arr[j].task_array)
          this.ngOnInit();
        }
      }
    }
  }

  today_button(x: any) {
    this.date = this.datePipe.transform(new Date(), 'M/dd/yyyy');
    x.date = this.date
  }

  tomorrow_button(x: any, index: any) {
    let d = new Date();
    d.setDate(d.getDate() + 1);
    this.date = this.datePipe.transform(d, 'M/dd/yyyy');
    x.date = this.date
  }
}
