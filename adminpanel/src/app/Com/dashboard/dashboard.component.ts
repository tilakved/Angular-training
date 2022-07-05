import {Component, OnInit} from '@angular/core';
// import Chart from 'chart.js/auto';

import {Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle} from 'chart.js';
import {PostService} from "../../../services/post/post.service";

Chart.register(ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  months: any = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  showChart: boolean = true;
  Votes = [12, 19, 3, 11, 2, 3]
  posts: any;
  new_var: any = [];
  new_var2: any = [];

  constructor(private service: PostService) {
  }

  ngOnInit(): void {

    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        for (let i = 5; i < 20; i++) {
          this.new_var.push(this.posts[i].id)
          this.new_var2.push(this.posts[i].userId)
        }
        console.log(this.posts.entries)
        let chart = new Chart("revenueChartCanvas", {
          type: 'bar',
          data: {
            labels: this.new_var,
            datasets: [{
              label: '# of Votes',
              data: this.new_var2,
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
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        let chart3 = new Chart("salesChartCanvas", {
          type: 'pie',
          data: {
            labels: this.new_var,
            datasets: [{
              label: '# of Vote',
              data: this.new_var2,
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
        let chart2 = new Chart("lineChart", {
          type: 'line',
          data: {
            labels: this.new_var,
            datasets: [{
              label: '% of Sale',
              data: this.new_var2,
              fill: false,
              borderColor: 'rgb(14,66,60)',
              tension: 0.1

            }]
          }
        })
        let chart4 = new Chart("doughnutChart", {
          type: 'doughnut',
          data: {
            labels: this.new_var,
            datasets: [{
              label: '# of Vote',
              data: this.new_var2,
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
      });


  }

}
