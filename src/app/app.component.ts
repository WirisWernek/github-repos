import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositorioModel } from './models/Repositorio.model';
import { GitHubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'github-repos';
  username: string = 'wiriswernek';
  repositorios$!: Observable<RepositorioModel[]>;

  constructor(private githubServices: GitHubService) {}

  ngOnInit(): void {
    this.repositorios$ = this.githubServices.getRepositorios(this.username);
  }
}
