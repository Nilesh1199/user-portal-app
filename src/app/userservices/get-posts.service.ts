import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  
  constructor(private http:HttpClient) { }
  
  getPosts(userId:number){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId+'/posts');
  }
}
