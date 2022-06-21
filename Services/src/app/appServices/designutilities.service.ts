import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilitiesService {
  products:any = [{name: "Mobile", id: "21"}
    ,{name:"Laptop", id:"22"}
  ];

  constructor() { }
  messageAlert(){
    alert("hey.Nice to meet you!!")
  }

}
