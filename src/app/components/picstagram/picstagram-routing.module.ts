import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';

import { PostFormGuard } from 'src/app/guards/post-form.guard';

import { ProfileComponent } from './profile/profile.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'posts/add', component: PostFormComponent, canDeactivate: [PostFormGuard] },
  { path: 'posts/detail/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicstagramRoutingModule { }
