import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetTodosService {

  constructor(private http :HttpClient) { }
  
  getTodos(userId:number){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId+'/todos');
  }
}
