import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  /** SIGNAL INPUTS */
  // selectedUser = signal((DUMMY_USERS[randomIndex])) **If randomIndex was a global variable assigned = Math.floor(Math.random() * DUMMY_USERS.length)
  // imagePath = computed(() => 'assets/users/' + this.selectedUsers().avatar) **Use instead of get imagePath(){}

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
