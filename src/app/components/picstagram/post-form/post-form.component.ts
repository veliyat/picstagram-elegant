import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PostService } from 'src/app/services/post.service'
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  caption: string = ''
  description: string = ''
  imageUrl: string = ''
  formDirty: boolean = false;

  constructor(
    private postService: PostService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleChange() {
    this.formDirty = true;
  }

  uploadImage(event) {
    this.postService.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.imageUrl = res.imageUrl
      })
  }

  addPost(): void {
    const data = {
      caption: this.caption,
      description: this.description,
      imageUrl: this.imageUrl
    }

    this.postService.addPost(data)
      .subscribe(() => {
        this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.caption = '';
        this.description = '';
        this.imageUrl = '';
        this.formDirty = false;
        this.router.navigate(['/profile'])
      })
  }
}
