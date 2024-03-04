import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/models/User.model';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
    @Input() user!: UserModel;

    goToGitHub() {
        this.goToURL(this.user.html_url);
    }

    goToURL(link: string) {
        window.open(link.toString(), '_blank');
    }
}
