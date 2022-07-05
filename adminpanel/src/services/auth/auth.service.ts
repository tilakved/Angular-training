import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate = false;

  login(user: string, password: string): boolean {
    if (user === '123' && password === '123') {
      this.isAuthenticate = true;
      return this.isAuthenticate;
    } else {
      this.isAuthenticate = false;
    }
    return this.isAuthenticate;
  }
}
