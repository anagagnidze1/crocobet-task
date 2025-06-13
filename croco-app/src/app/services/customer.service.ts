import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, map, Observable } from "rxjs";
import { users } from "../shared/interfaces/customer.interface";
import { Post } from "../shared/interfaces/posts.interface";

@Injectable({
  providedIn: 'root'
})

export class JsonPlaceholderService {
  private readonly API = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<users[]> {
    return this.http.get<users[]>(`${this.API}/users`);
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}/posts`);
  }
  getPostsWithUserNames(): Observable<{ post: Post, userName: string }[]> {
    return forkJoin({
      posts: this.getPosts(),
      users: this.getUsers()
    }).pipe(
      map(({ posts, users }) =>
        posts.map(post => {
          const user = users.find(u => u.id === post.userId);
          return {
            post,
            userName: user ? user.name : 'Unknown User'
          };
        })
      )
    );
  }
}
