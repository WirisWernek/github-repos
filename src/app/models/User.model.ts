export class UserModel {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  starred_url: string;
  name: string;
  blog: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;

  constructor() {
    this.login = '';
    this.id = 0;
    this.avatar_url = '';
    this.url = '';
    this.html_url = '';
    this.followers_url = '';
    this.following_url = '';
    this.starred_url = '';
    this.name = '';
    this.blog = '';
    this.bio = '';
    this.twitter_username = '';
    this.public_repos = 0;
    this.public_gists = 0;
    this.followers = 0;
    this.following = 0;
  }
}
