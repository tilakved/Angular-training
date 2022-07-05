import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
months:any = [["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]]
salesPercent = [12, 29, 33, 55, 51, 49, 50];
  constructor() { }

  ngOnInit(): void {
    let chart = new Chart("salesChart", {
      type: 'line',
      data: {
        labels: this.months,
        datasets: [{
          label: '% of Sale',
          data: this.salesPercent,
          fill: false,
          borderColor: 'rgb(14,66,60)',
          tension: 0.1

        }]
      }
    })


    let chart3 = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: this.months,
        datasets: [{
          label: '# of Vote',
          data: this.salesPercent,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      }
    })
  }

}
