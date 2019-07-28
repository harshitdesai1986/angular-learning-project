import { Component, OnInit } from '@angular/core';
import { UserCrudOperationsService } from '../user-crud-operations.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  private userList: any = {};

  constructor(private userCrudOperationsService: UserCrudOperationsService, private router:Router) { }

  ngOnInit() {
    this.displayUsers();
  }

  public displayUsers() {
    this.userCrudOperationsService.getUsers().subscribe(list => { this.userList.data = list });
  }

  public editUser(id) {
    if(id !== null || id !== '') {
      this.router.navigate(['/update-user', id]);
    }
  }

  public deleteUser(id) {
    if(id !== null || id !== '') {
      this.userCrudOperationsService.deleteUser(id).subscribe(response => {
        console.log("User Deleted successfully!");
        this.displayUsers();
      });
    }
  }

}
