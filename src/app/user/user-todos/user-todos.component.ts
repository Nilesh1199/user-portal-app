import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTodosService } from 'src/app/userservices/get-todos.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent implements OnInit {
  todos:any=[];
  constructor( private route:ActivatedRoute, private getTodosApi: GetTodosService,private _location: Location) { }

  ngOnInit(): void {
    let userId= this.route.snapshot.params.id;
    this.getTodosApi.getTodos(userId).subscribe(data=>this.todos=data);

  }
  backClicked() {
    // console.log('bACKKKKK');
    this._location.back();
  }

}
