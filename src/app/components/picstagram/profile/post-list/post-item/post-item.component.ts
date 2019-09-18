import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  @Input() post: Post;

  constructor(
    private postService: PostService,
    private messageService: MessageService
  ) {
    // console.log('Inside Constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log(changes)
  }

  ngOnInit() {
    // console.log('Inside Ng On Init')
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log('Inside On Destroy')
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('After view init.')
  }

  remove() {
    this.postService.removePost(this.post.id).subscribe((data) => {
      this.messageService.setMsg({ msg: 'Post Deleted!', type: 'success' })
    })
  }
}
