import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAlbumsService } from 'src/app/userservices/get-albums.service';
import { GetPhotosService } from 'src/app/userservices/get-photos.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  
  photoList:any=[];
  title:any=[];
  constructor(private route: ActivatedRoute, private getPhotosApi: GetPhotosService, private getTitleApi: GetAlbumsService, private _location:Location) { }

  ngOnInit(): void {
    let albumId= this.route.snapshot.params.id;
    // console.log(albumId);

    this.getPhotosApi.getPhotos(albumId).subscribe((data)=>this.photoList=data);
    this.getTitleApi.getTitle(albumId).subscribe((data)=>this.title=data);
  }
  backClicked() {
    // console.log('bACKKKKK');
    this._location.back();
  }
}
