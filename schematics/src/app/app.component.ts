import {Component} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

interface HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'schematics';

}
