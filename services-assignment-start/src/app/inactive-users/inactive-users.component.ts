import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    //this.userSetToActive.emit(id);
  }
}
