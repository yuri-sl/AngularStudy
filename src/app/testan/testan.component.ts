import { Component, computed, signal, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = () => {
  let number = Math.floor(Math.random() * DUMMY_USERS.length);

  return number;
};
@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './testan.component.html',
  styleUrl: './testan.component.css',
})
export class TestanComponent {
  old_selectedUser = DUMMY_USERS[randomIndex()];

  selectedUser = signal(DUMMY_USERS[randomIndex()]);
  imagePath = computed(() => this.selectedUser().avatar);

  // get imagePath(){
  //     return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectedUser() {
    console.log('clicked!');
  }
  randomize() {
    let new_user = randomIndex();
    let old_user = this.selectedUser;

    this.selectedUser.set(DUMMY_USERS[randomIndex()]);
  }
}
