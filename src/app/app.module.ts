import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { HttpClientModule} from '@angular/common/http';
import { GetUserListService } from './userservices/get-user-list.service';
import { UserComponent } from './user/user/user.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { UserTodosComponent } from './user/user-todos/user-todos.component';
import { UserAlbumsComponent } from './user/user-albums/user-albums.component';
import { GetPostsService } from './userservices/get-posts.service';
import { GetTodosService } from './userservices/get-todos.service';
import { GetAlbumsService } from './userservices/get-albums.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GetPhotosService } from './userservices/get-photos.service';
import { AlbumPhotosComponent } from './user/user-albums/album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
    UserPostsComponent,
    UserTodosComponent,
    UserAlbumsComponent,
    AlbumPhotosComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule
    

    
  ],
  providers: [GetUserListService,
    GetPostsService,
    GetTodosService,
    GetAlbumsService,
    GetPhotosService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
