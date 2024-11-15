import {
    Component,
    Input,
    input,
    computed,
    signal,
    Output,
    EventEmitter,
    output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//     id: string;
//     avatar: string;
//     name: string;
// }

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    // selectedUser = signal(DUMMY_USERS[randomIndex]);
    // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

    // get imagePath() {
    //   return 'assets/users/' + this.selectedUser.avatar
    // }
    // @Input({ required: true }) id!: string;
    // @Input({ required: true }) avatar!: string;
    // @Input({ required: true }) name!: string;
    @Input({required: true}) user!: User;
    @Input({required: true}) selected!: boolean;
    @Output() select = new EventEmitter<string>();
    // avatar = input.required<string>();
    // name = input.required<string>();
    // select = output<string>();

    // imagePath = computed(() => {
    //   return 'assets/users/' + this.avatar();
    // });

    get imagePath() {
        return 'assets/users/' + this.user.avatar;
    }

    onSelectUser() {
        //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
        // }
        this.select.emit(this.user.id);
    }
}
