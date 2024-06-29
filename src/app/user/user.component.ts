import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  @Input({ required: true }) users!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  /** SIGNAL INPUTS */
  // selectedUser = signal((DUMMY_USERS[randomIndex])) **If randomIndex was a global variable assigned = Math.floor(Math.random() * DUMMY_USERS.length)
  // imagePath = computed(() => 'assets/users/' + this.selectedUsers().avatar) **Use instead of get imagePath(){}

  get imagePath() {
    return 'assets/users/' + this.users.avatar;
  }

  onSelectUser() {
    this.select.emit(this.users.id);
  }
}
