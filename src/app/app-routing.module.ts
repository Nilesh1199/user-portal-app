import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumPhotosComponent } from './user/user-albums/album-photos/album-photos.component';
import { UserAlbumsComponent } from './user/user-albums/user-albums.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { UserTodosComponent } from './user/user-todos/user-todos.component';
import { UserComponent } from './user/user/user.component';
import { UsersListComponent } from './user/users-list/users-list.component';

const routes: Routes = [
  { path : "", redirectTo : 'users', pathMatch: 'full'},
  { path : "users", component: UsersListComponent},
  { path : "users/:id", component: UserComponent},
  { path : "users/:id/posts", component: UserPostsComponent },
  { path : "users/:id/todos", component: UserTodosComponent},
  { path : "users/:id/albums", component :UserAlbumsComponent},
  { path : "albums/:id/photos", component: AlbumPhotosComponent},
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
