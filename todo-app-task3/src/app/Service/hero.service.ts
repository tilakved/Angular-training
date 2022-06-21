import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // name: string | undefined;
  // id : number | undefined;
  // div_color : any | undefined;

  names: any | void = []
  show: boolean = true;
  arr_id: any = [];
  task_name_arr_id: any = []
  final_today_arr: any = []

  constructor() {
  }


}
