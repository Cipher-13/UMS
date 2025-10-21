import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Details } from 'src/app/Core/Interfaces/iusers';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  fullResponse:any;
  userList:Details[]=[];
   
 displayedColumns: string[] = [
  'id',
  'firstName',
  'lastName',
  'gender',
  'age',
  'email',
  'phone',
  'username',
  'birthDate',
  'actions'
];



  constructor(private myService: UsersService,private snackBar: MatSnackBar) {}
  

  allUsers() {
    this.myService.Fetcher().subscribe({
      next: (res) => { //filling the interfaces
        this.fullResponse = res;
        this.userList = res.users;  // = this.fullResponse.Details
      },
       error: (err) => {
          this.snackBar.open('Network Error', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
          
        },
       
    });
  }


onEdit(user: any) {
  console.log('Edit clicked for:', user);
}

onDelete(user: any) {
  console.log('Delete clicked for:', user);
}


  ngOnInit(): void {
    this.allUsers();
  }

}
