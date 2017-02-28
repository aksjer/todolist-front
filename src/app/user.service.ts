import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { todoApiUrl } from '../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http, private requestOptions: RequestOptions) {
    this.retrieveUser();

  }

  test() {
    return this.http
      .get(`${todoApiUrl}/todos`)
      .map(e => e.json())
      .do(e => console.log(e))
  }

  authenticate() {
    return this.http
      .post(`${todoApiUrl}/authenticate`, { id: 1, name: 'alfrd', password: '123' })
      .map(e => e.json())
      .do(e => {
        this.storageUser(e);
      })
  }

  storageUser(e) {
    localStorage.setItem('rememberMe', JSON.stringify(e))
    this.retrieveUser();
  }

  retrieveUser() {
    const rememberMe = JSON.parse(localStorage.getItem('rememberMe'))
    if (rememberMe)
      this.requestOptions.headers.set('Authorization', rememberMe.token);

  }

  logout() {
    localStorage.removeItem('rememberMe');
    this.requestOptions.headers.delete('Authorization');
  }


}
