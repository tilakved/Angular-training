import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detection';
  userValue:any;
  ngOnInit():void{
    this.userValue={
      firstname: 'Ti',
      lastname: 'Ved'
    }
  }

  update() {
    this.userValue.firstname='Tilak'
  }
}
