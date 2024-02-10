import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { PaginatorModel } from './models/Paginator.model';
import { RepositorioModel } from './models/Repositorio.model';
import { UserModel } from './models/User.model';
import { GitHubService } from './services/github.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
   title = 'GitHub Repos List';
   username: string = 'wiriswernek';
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
