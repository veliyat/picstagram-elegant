import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { PostFormComponent } from '../components/picstagram/post-form/post-form.component';

@Injectable({
  providedIn: 'root'
})
export class PostFormGuard implements CanDeactivate<PostFormComponent> {
  canDeactivate(postForm: PostFormComponent) {
    if (postForm.formDirty) {
      return confirm('All Changes would be lost. Are you sure ?')
    }

    return true;
  }
}
