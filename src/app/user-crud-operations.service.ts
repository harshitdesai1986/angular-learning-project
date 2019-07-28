import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCrudOperationsService {

  private endpointURL = 'http://localhost:3000';
  private getUsersURL = this.endpointURL + '/getUsers';
  private createUserURL = this.endpointURL + '/createUser';
  private loginURL = this.endpointURL + '/login';
  private updateUserDetailsURL = this.endpointURL + '/updateUser';
  private deleteUserURL = this.endpointURL + '/deleteUser';

  constructor(private http: HttpClient) { }

  /**
   * Get call to retrieve users
   */
  public getUsers() {
    return this.http.get(this.getUsersURL);
  }

  /**
   * Post call to register a user
   * @param data Contains first name, last name, email and password
   */
  public registerUser(data) {
    return this.http.post(this.createUserURL, data);
  }

  /**
   * Post call to login to an application
   * @param data Contains email and password
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

  /**
   * Delete call to delete a user
   * @param data Contains id of an existing user
   */
  public deleteUser(data) {
    return this.http.delete(this.deleteUserURL + "/" + data, data);
  }
}
