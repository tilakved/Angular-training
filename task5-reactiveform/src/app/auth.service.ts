import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate = false;

  login(user: string, password: string): boolean {
    if ((user === 'admin1' && password === '123') || (user === 'admin2' && password === '123') || (user === 'admin3' && password === '123')) {
      this.isAuthenticate = true;
      return this.isAuthenticate;
    } else {
      this.isAuthenticate = false;
    }
    return this.isAuthenticate;
  }
}
