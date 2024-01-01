export class RepositorioModel {
  id: number;
  name: string;
  html_url: string;
  description: string;
  url: string;
  tags_url: string;
  languages_url: string;
  language: string;
  homepage: string;
  topics: string[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.html_url = '';
    this.description = '';
    this.url = '';
    this.tags_url = '';
    this.languages_url = '';
    this.homepage = '';
    this.topics = [];
    this.language = '';
  }
}
