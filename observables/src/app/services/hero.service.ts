import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {
  }

  old_number: number = 0;
  new_number: number = 0;
}
