import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postsService: PostsService) {

    this.postsService.loadFeatured().subscribe(val => {
      console.log(val);
    });

  }

  ngOnInit(): void {
  }

}
