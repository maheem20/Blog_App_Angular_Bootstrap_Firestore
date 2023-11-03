import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(val => {
      this.postService.loadOnePost(val.id).subscribe(post => {
        console.log(post);
      });
    });
  }
}
