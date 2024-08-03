import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { RepositorioCardComponent } from './components/repositorio-card/repositorio-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PaginatorModel } from './models/Paginator.model';
import { RepositorioModel } from './models/Repositorio.model';
import { UserModel } from './models/User.model';
import { GitHubService } from './services/github.service';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        UserCardComponent,
        FormsModule,
        NgTemplateOutlet,
        RepositorioCardComponent,
        PaginationComponent,
        SpinnerComponent,
    ],
})
export class AppComponent implements OnInit {
    title = 'GitHub Repos List';
    username = 'wiriswernek';
    repositorios: RepositorioModel[] = [];
    user: UserModel;
    paginator: PaginatorModel;

    constructor(private githubServices: GitHubService) {
        this.user = new UserModel();
        this.paginator = new PaginatorModel();
    }

    ngOnInit(): void {
        this.search();
    }

    search() {
        this.searchPagination(this.paginator);
    }

    searchPagination(pagination: PaginatorModel) {
        if (this.username.trim() !== '') {
            this.githubServices
                .getUser(this.username)
                .pipe(take(1))
                .subscribe((user) => {
                    this.user = user;
                    this.user.name = this.getFirstAndLastName();
                    take(1);
                });

            this.githubServices
                .getRepositorios(this.username, pagination.perPage, pagination.page)
                .pipe(take(1))
                .subscribe((value) => {
                    this.repositorios = value;
                });
        }
    }

    private getFirstAndLastName(): string {
        if (!this.user?.name) return '';

        const splittedName = this.user?.name.split(' ');

        return `${splittedName[0]} ${splittedName.length >= 2 ? splittedName.pop() : ''}`;
    }
}
