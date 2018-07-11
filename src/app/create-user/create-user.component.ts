import { Component, OnInit } from '@angular/core';
import { UserCrudOperationsService } from '../user-crud-operations.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  private formData: any = {
    email: '',
    password: ''
  };
  private confirmPassword:string = '';
  private alertMessage:string = '';

  constructor(private userCrudOperationsService: UserCrudOperationsService, private router:Router) { }

  ngOnInit() {
  }

  public createUser() {
    if(this.formData.email !== '' && this.formData.password !== '' && this.formData.password === this.confirmPassword) {
      this.userCrudOperationsService.registerUser(this.formData)
        .subscribe(response => {
          if(response) {
            this.router.navigate(['/login']);
          };
        });
    }
    else if(this.formData.email === '' || this.formData.password === '') {
      this.alertMessage = "User Name or Password fields must be blank";
    }
    else if(this.formData.password !== this.confirmPassword) {
      this.alertMessage = "Password and Confirm Password are not matching";
    }
  }

}
