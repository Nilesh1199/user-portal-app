import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {

  constructor(private http: HttpClient) { }
  getPhotos(albumId:number){
    return this.http.get('https://jsonplaceholder.typicode.com/albums/'+albumId+'/photos');
  }

  getFirstImage(album: number,photoId:number){
    return this.http.get('https://jsonplaceholder.typicode.com/albums/'+album+'/photos?id='+photoId);
  }
}
