import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Incre_Decre';
  num:number= 0;
  courses=["a","b","c"]
  // plus = () =>{
  //   this.num++
  // }
  //
  // minus = () => {
  //   if(this.num>0){
  //     this.num--
  //   }
  // }

  plusMinus = (value:any):void =>{
    // console.log(value)
    if(value){ //value is also written as value==true
      this.num++;
    }
    if(!value && this.num>0){ //"!value" is also written as value==false
      this.num--;
    }
  }
}
