import {Component} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  today: number = Date.now();
  pi: number = 3.14159265359;
  x: any = '123987987,123546564';

}
