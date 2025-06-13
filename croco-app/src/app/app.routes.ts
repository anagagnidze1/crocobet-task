import { Routes } from '@angular/router';
import { Customers } from './customers/customers';
import { Posts } from './posts/posts';
import { UserPostsComponent } from './user-posts/user-posts';
import { TodoList } from './todo-list/todo-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full' 
    },
    {
        title: 'customers',
        path: 'customers',
        component: Customers,
    },
    {
        title: 'posts',
        path: 'posts',
        component: Posts,
    },
    {
        path: 'posts/:userId',
        component: UserPostsComponent,
    },
    {
        path: 'todos/:id', 
        component: TodoList,
    }

];
