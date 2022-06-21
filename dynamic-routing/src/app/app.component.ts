import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic parameter routing';
  id: any | undefined;
  items: any = [
    {name: 'x', id: 1},
    {name: 'x1', id: 2},
    {name: 'x2', id: 3},
    {name: 'x3', id: 4},
    {name: 'x4', id: 5}

  ]


}
