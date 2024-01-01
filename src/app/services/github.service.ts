import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RepositorioModel } from '../models/Repositorio.model';
import { UserModel } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  constructor(private http: HttpClient) {
  }

  getRepositorios(username: string): Observable<RepositorioModel[]> {
    return this.http.post<RepositorioModel[]>(
      environment.API_URL + "/github/repos",
      {
        "username": username
      }
    );
  }

  getUser(username: string): Observable<UserModel> {
    return this.http.post<UserModel>(
      environment.API_URL + "/github/users",
      {
        "username": username
      }
    );
  }
}
