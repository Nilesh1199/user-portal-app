import { Component, OnInit } from '@angular/core';
import { GetUserListService } from 'src/app/userservices/get-user-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userList:any=[];
  constructor( private getUserApi: GetUserListService) { }

  ngOnInit(): void {
    this.getUserApi.GetUserList().subscribe((data)=>this.userList=data);
    console.log( this.userList);

  }

}
