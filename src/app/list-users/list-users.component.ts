import { Component, OnInit } from '@angular/core';
import { UserCrudOperationsService } from '../user-crud-operations.service';
//import { User } from './user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  private userList: any = {};

  constructor(private userCrudOperationsService: UserCrudOperationsService) { }

  ngOnInit() {
    this.displayUsers();
  }

  public displayUsers() {
    this.userCrudOperationsService.getUsers().subscribe(list => { this.userList = list });
  }

}
