import { Component, OnInit } from '@angular/core';
import { GetUserListService } from 'src/app/userservices/get-user-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private api:GetUserListService,private route: ActivatedRoute, private _location: Location) { }
  
  // User user1=null;
  user:any=[];
  ngOnInit(): void {
    let userId:number=this.route.snapshot.params.id;
    console.log(userId);
    
    // this.api.GetUserById(userId).subscribe((data)=>console.log(data) );
    this.api.GetUserById(userId).subscribe((data)=>this.user=data );
    console.log(this.user);
   
  }
  backClicked() {
    // console.log('bACKKKKK');
    this._location.back();
  }
}
