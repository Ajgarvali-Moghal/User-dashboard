import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/users/user.actions';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { selectAllUsers, selectUsersLoading } from '../../store/users/user.selectors';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

interface UserInterface {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  selectedUser: User | null = null;
  showForm = false;
  addingUser = false;
  showProfilePopover = false;
  userDetails = localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails") as string) : {};
  username = this.userDetails.username || "john Doe";

  showAddUserModal = false;
  newUser = { name: '', email: '', role: '', username: '' };
  showEditUserModal = false;
  editUser: any = {};
  updatingUser = false;

  constructor(private store: Store, private router: Router) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectUsersLoading);
  }

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
    if(!localStorage.getItem('mock_token')) {
      this.router.navigate(['/login']);
    }
  }

  addNew() {
    this.selectedUser = null;
    this.showForm = true;
  }

  edit(user: User) {
    this.selectedUser = user;
    this.showForm = true;
  }

  openAddUserModal() {
    this.showAddUserModal = true;
    this.newUser = { name: '', email: '', role: '', username: '' };
  }

  closeAddUserModal() {
    this.showAddUserModal = false;
  }

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      this.addingUser = true;
      const allowedRoles = ['tech', 'id', 'gd', 'qa'];
      const role = allowedRoles.includes(this.newUser.role) ? this.newUser.role : 'tech';

      const user: User = {
        name: this.newUser.name,
        username: this.newUser.username,
        email: this.newUser.email,
        role: role as 'tech' | 'id' | 'gd' | 'qa',
        jobRole: role as 'tech' | 'id' | 'gd' | 'qa'
      };

      this.store.dispatch(UserActions.addUser({ user }));
      setTimeout(() => {
        this.addingUser = false;
        this.closeAddUserModal();
      }, 1000);
    }
  }

  openEditUserModal(user: any) {
    this.editUser = { ...user }; 
    this.showEditUserModal = true;
    this.updatingUser = false;
  }

  closeEditUserModal() {
    this.showEditUserModal = false;
  }

  updateUser() {
    if (this.editUser.name && this.editUser.email && this.editUser.role) {
      this.updatingUser = true;
      this.store.dispatch(UserActions.updateUser({ user: this.editUser }));
      setTimeout(() => {
        this.updatingUser = false;
        this.closeEditUserModal();
      }, 800);
    }
  }

  delete(id: number) {
    if (!confirm('Delete this user?')) return;
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  onFormClose() {
    this.showForm = false;
    this.selectedUser = null;
  }

  logout() {
    localStorage.removeItem('mock_token');
    localStorage.removeItem('userDetails');
    this.router.navigate(['/login']);
  }

  toggleProfilePopover() {
    this.showProfilePopover = !this.showProfilePopover;
  }
}
