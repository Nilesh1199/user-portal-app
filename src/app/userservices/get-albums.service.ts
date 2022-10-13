import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumsService {

  constructor(private http :HttpClient) { }

  getAlbums(userId:number){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId+'/albums');
  }
  getTitle(albumId:number){
    
    return this.http.get('https://jsonplaceholder.typicode.com/albums/'+albumId);
  }
}
