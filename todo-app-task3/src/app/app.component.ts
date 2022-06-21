import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddListDialogComponent} from "./Com/add-list-dialog/add-list-dialog.component";
import {HeroService} from "./Service/hero.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Task-3 todo app';

  constructor(public dialog: MatDialog, public hero: HeroService) {
  }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('Array')!) == null) {
      this.hero.names = [];
    } else {
      this.hero.names = JSON.parse(localStorage.getItem('Array')!)
    }
  }

  new_list(): void {
    let dialogRef = this.dialog.open(AddListDialogComponent, {width: '350px'}), task_arr;
    dialogRef.afterClosed().subscribe(result => {
      let letters = '0123456789ABCDEF';
      let color = "#";
      let name_arr, name_id: string = '';

      function getRandomColor() {
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      let getRandomId = (): any => {
        for (let i = 0; i < 6; i++) {
          name_id += letters[Math.floor(Math.random() * 16)];
        }
        if (this.hero.arr_id.includes(name_id) == true) {
          getRandomId();
        } else {
          this.hero.arr_id.push(name_id)
          // console.log(this.hero.arr_id)
          return name_id;
        }
      }

      if (result == undefined) {
        return;
      } else {
        getRandomColor();
        getRandomId();
        // console.log(color)
        // this.hero.names.color.push(color)
        this.hero.names.push(
          {
            name: result,
            id: name_id,
            div_color: color,
            task_array: name_arr = []
          }
        )
        localStorage.setItem('Array', JSON.stringify(this.hero.names))
        // console.log(this.hero.names[0])
      }
    });
  }

  back_to_list() {
    this.hero.show = true
  }
}
