import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] ,
  animations: [ // <-- add your animations here
    // fader,
    // slider,
    // transformer,
    // stepper
  ]
})
export class AppComponent {
  title = 'breadcrumbs';
}
