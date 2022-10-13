import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl='https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class GetUserListService {

  constructor(private http: HttpClient) { }

  GetUserList(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
 }
  GetUserById(id:number){
    console.log('https://jsonplaceholder.typicode.com/users/'+id)
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }
}
