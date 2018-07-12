import { Component, OnInit } from '@angular/core';
import { UserCrudOperationsService } from '../user-crud-operations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css']
})
export class UpdateUserDetailsComponent implements OnInit {

  private userId:string;
  private formData:any = {
    name: '',
    job: ''
  };
  private alertMessage:string = ''; 

  constructor(private userCrudOperationsService: UserCrudOperationsService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  public resetDetails() {
    this.formData.name = '';
    this.formData.job = '';
  }

  public updateUser() {
    if(this.formData.name !== '' && this.formData.job !== '') {
      this.userCrudOperationsService.updateUserDetails(this.formData)
        .subscribe(response => {
          if(response !== null) {
            this.router.navigate(['/user-list']);
          }
        });
    }
    else if(this.formData.name === '' || this.formData.job === '') {
      this.alertMessage = 'Name or Job fields must be blank';
    }
  }

}
