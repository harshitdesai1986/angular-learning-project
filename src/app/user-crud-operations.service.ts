import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCrudOperationsService {

  private endpointURL = 'https://reqres.in';
  private getUsersURL = this.endpointURL + '/api/users?per_page=50';
  private createUserURL = this.endpointURL + '/api/register';
  private loginURL = this.endpointURL + '/api/login';
  private updateUserDetailsURL = this.endpointURL + '/api/users/';

  constructor(private http: HttpClient) { }

  /**
   * Get call to retrieve users
   */
  public getUsers() {
    return this.http.get(this.getUsersURL);
  }

  /**
   * Post call to register a user
   * @param data Contains user name and password
   */
  public registerUser(data) {
    return this.http.post(this.createUserURL, data);
  }

  /**
   * Post call to login to an application
   * @param data Contains username and password
   */
  public login(data) {
    return this.http.post(this.loginURL, data);
  }

  /**
   * Put call to update/add name and job of a user
   * @param data Contains name ans job of an existing user
   */
  public updateUserDetails(data) {
    return this.http.put(this.updateUserDetailsURL, data);
  }
}
