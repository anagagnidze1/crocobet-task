import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interfaces/posts.interface';
import { JsonPlaceholderService } from '../services/customer.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {
   postsWithUserNames: { post: Post; userName: string }[] = [];

  constructor(private api: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.api.getPostsWithUserNames().subscribe(data => {
      this.postsWithUserNames = data;
    });
  }

  selectedPost: any = null;

  openDetails(item: any): void {
    this.selectedPost = item;
  }

  closeDetails(): void {
    this.selectedPost = null;
  }
}
