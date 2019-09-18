import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PicstagramRoutingModule } from './picstagram-routing.module';

import { PicstagramComponent } from './picstagram.component';
import { ProfileComponent } from './profile/profile.component';
import { SummaryComponent } from './profile/summary/summary.component';
import { PostListComponent } from './profile/post-list/post-list.component';
import { PostItemComponent } from './profile/post-list/post-item/post-item.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    PicstagramComponent,
    ProfileComponent,
    SummaryComponent,
    PostListComponent,
    PostItemComponent,
    PostFormComponent,
    PostDetailComponent,
    HighlightDirective,
    MyUppercasePipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PicstagramRoutingModule
  ],
  exports: [
    PicstagramComponent
  ]
})
export class PicstagramModule { }
