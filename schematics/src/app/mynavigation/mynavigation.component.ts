import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-mynavigation',
  templateUrl: './mynavigation.component.html',
  styleUrls: ['./mynavigation.component.scss']
})
export class MynavigationComponent {
  title = 'Schematics';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
