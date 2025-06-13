import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { users } from '../shared/interfaces/customer.interface';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {
  user: users[] = [];
  filteredUsers: users[] = [];
  searchTerm: string = '';

  constructor(private api: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe(data => {
      this.user = data;
      this.filteredUsers = data;
    });
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.user.filter(u =>
      u.name.toLowerCase().includes(term) ||
      u.username.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term)
    );
  }

  onSearchChange() {
    this.applyFilter();
  }
}
