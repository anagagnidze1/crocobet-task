import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../shared/interfaces/posts.interface';
import { JsonPlaceholderService } from '../services/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.css'
})
export class UserPostsComponent implements OnInit {
  userId!: number;
  userPosts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private jsonService: JsonPlaceholderService
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));

    this.jsonService.getPosts().subscribe(posts => {
      this.userPosts = posts.filter(post => post.userId === this.userId);
    });
  }
}