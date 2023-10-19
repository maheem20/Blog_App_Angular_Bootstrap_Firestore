import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredPostsArray: Array<object> | undefined;
  latestPostsArray: Array<object> | undefined;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {

    this.postsService.loadFeatured().subscribe(val => {
      this.featuredPostsArray = val;
    });

    this.postsService.loadLatest().subscribe(val => {
      this.latestPostsArray = val;
    });
  }

}
