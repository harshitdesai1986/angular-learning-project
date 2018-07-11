import { Component, OnInit } from '@angular/core';
import { UserCrudOperationsService } from '../user-crud-operations.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private formData: any = {
    email: '',
    password: ''
  };
  private alertMessage:string = '';

  constructor(private userCrudOperationsService: UserCrudOperationsService, private router:Router) { }

  ngOnInit() {
  }

  public login() {
    if(this.formData.email !== '' && this.formData.password !== '') {
      this.userCrudOperationsService.login(this.formData)
        .subscribe(response => {
          if(response) {
            this.router.navigate(['/user-list']);
          };
        });
    }
    else if(this.formData.email === '' || this.formData.password === '') {
      this.alertMessage = "User Name or Password fields must be blank";
    }
  }

  public register() {
    this.router.navigate(['/create-user']);
  }

}
