import { Component } from '@angular/core';
import {
	initAccordions,
	initCarousels,
	initCollapses,
	initDials,
	initDismisses,
	initDrawers,
	initDropdowns,
	initModals,
	initPopovers,
	initTabs,
	initTooltips,
} from 'flowbite';
import { take } from 'rxjs';
import { RepositorioModel } from './models/Repositorio.model';
import { UserModel } from './models/User.model';
import { GitHubService } from './services/github.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   title = 'GitHub Repos List';
   username: string = 'wiriswernek';
   repositorios: RepositorioModel[] = [];
   user: UserModel;
   constructor(private githubServices: GitHubService) {
      this.user = new UserModel();
   }

   ngOnInit(): void {
      this.search();
      this._initOptions();
   }

   search() {
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
            .getRepositorios(this.username)
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

   private _initOptions() {
      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDrawers();
      initDropdowns();
      initModals();
      initPopovers();
      initTabs();
      initTooltips();
   }
}
