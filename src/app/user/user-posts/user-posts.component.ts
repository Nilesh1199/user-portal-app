import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPostsService} from 'src/app/userservices/get-posts.service';
@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts:any=[];
  // postss:any=[];
  postTitle:any=[];
  postBody:any=[];
  constructor(private getPostsApi:GetPostsService, private route:ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {
    let userId:number=this.route.snapshot.params.id;
    // console.log('User id:'+userId);
    
    this.getPostsApi.getPosts(userId).subscribe((data)=>this.posts=data);
    
  }
  backClicked() {
    // console.log('bACKKKKK');
    this._location.back();
  }
  }
 
