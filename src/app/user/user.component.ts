import {
  Component,
  Input,
  computed,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //@Input =>
  //@Input() avatar!: string; //Tells TS that it will receive a value from outside
  //@Input() name!: string;
  //@Input() id!: string;

  //Input Signal => Assigns that the property will receive
  //a string value
  //With this notation you don't have to use the !
  rcv_value_test = input.required<String>();
  avatarSignal = input<User>();
  id!: String;
  name!: String;
  avatar!: String;
  //@Input() rcv_user!: User;
  @Input({ required: true }) set rcv_user(value: User) {
    if (!value) {
      return;
    }
    this.id = value.id;
    this.name = value.name;
    this.avatar = value.avatar;
  }
  //O evento que deve ser passado no componente pai
  //deve ser (select)
  @Output() select = new EventEmitter<String>(); //Emit custom values for any event that is created
  //Don't have to create an EventEmitter
  anotherEvent = output<String>();
  onSelectUser() {
    this.select.emit(this.id);
  }
  imagePath = computed(() => {
    return 'assets/users/' + this.avatarSignal.name;
  });
}
