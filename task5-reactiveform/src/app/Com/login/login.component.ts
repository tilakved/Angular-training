import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
// import {ModelComponent} from '../model/model.component'
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {MessageComponent} from "../message/message.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
      ]),

      transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('600ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 0 }))
      ])
    ]),
  ]
})
export class LoginComponent implements OnInit {

  constructor(public _service:AuthService, private route:Router,private  dialog:  MatDialog) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    uname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9]+$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
  })

  get f() { return this.loginForm.controls; }
  submitted = false;
  check(uname:any,pass:any){
    this.submitted = true;
    if(this.loginForm.valid){
      let output = this._service.login(uname,pass);
      if(output){
        this._service.isAuthenticate = true
        this.route.navigate(['/details'])

      }else {
        this.submitted = false
        this._service.isAuthenticate = false;
        this.loginForm.reset()
        this.dialog.open(MessageComponent,{ data: {
            message:  "Error!!!"
          }});

      }
    }
  }
}
