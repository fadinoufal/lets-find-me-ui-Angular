import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import { PostService } from './post.service';
import { Post } from '../../models/post.model';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TokenStorageService } from '../../auth/token-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {
  post: Post;
  postForm: FormGroup;
  //postContent: [];
  constructor(
    private postCrationService: PostService,
    private fb: FormBuilder,
    private tokenStorage: TokenStorageService
  ) {
    this.postForm = this.fb.group({
      title: '',
      category: '',
      postContent: this.fb.array([
        this.fb.group({ 
          text: '' 
        })
      ]),
      username: ''
    });
  }

  ngOnInit() {
  }

  addPostContent() {
    this.postContents.push(
      this.fb.group({ 
        text: '' 
      })
    );
  }

  get postContents() {
    return this.postForm.get('postContent') as FormArray;
  }

  async onSubmit() {
    this.postForm.get('username').setValue(this.tokenStorage.getUsername());
    this.createPost(this.postForm.value);
  }

  createPost(postForm) {
    console.log('post component createPost', JSON.stringify(postForm))
    this.postCrationService.createPost(postForm).subscribe(post =>
      console.log('retour' + post));
  }
}
