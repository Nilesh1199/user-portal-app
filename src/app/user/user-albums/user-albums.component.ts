import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAlbumsService } from 'src/app/userservices/get-albums.service';
import { GetPhotosService } from 'src/app/userservices/get-photos.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})
export class UserAlbumsComponent implements OnInit {
  albumList:any=[];
  // length:number=0;
  imageId:any=[];
  images: any=[];
  constructor(private getAlbumApi: GetAlbumsService, private route:ActivatedRoute, private getFirstimageApi: GetPhotosService
                ,private _location: Location ) { }

  ngOnInit(): void {
    let userId=this.route.snapshot.params.id;
    this.getAlbumApi.getAlbums(userId).subscribe((data)=>{
      this.albumList=data;
      // console.log(this.albumList);
      // this.getimageId(this.albumList);
      var image=this.getimageId(this.albumList);
      console.log(image);
      for(let i=0; i<this.albumList.length; i++){
        this.getFirstimageApi.getFirstImage(this.albumList[i].id,image[i]).subscribe((data)=>{
          this.images[i]=data;
          console.log(this.images[i] +'iiii');
        })
      }
      // console.log(typeof(this.images) );
      console.log(this.images) ;
      // console.log(Object.values(this.images));
      // var cc=this.images;
      // console.log(cc[0]);
      // console.log(Object.keys(this.images));

    });
  }

  
  getimageId(item:any){
    console.log("Entered in function");
    for(let i=0; i<item.length; i++){
      this.imageId[i]=((item[i].id-1)*50)+1;
      // console.log(this.imageId[i]);
      // console.log('image idt'+this.imageId[i]);
    }
    console.log('image idt  '+this.imageId);
    return this.imageId;
  }
  
  backClicked() {
    // console.log('bACKKKKK');
    this._location.back();
  }
  
  
}
