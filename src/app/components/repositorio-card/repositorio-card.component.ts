import { Component, Input } from '@angular/core';
import { RepositorioModel } from 'src/app/models/Repositorio.model';

@Component({
   selector: 'app-repositorio-card',
   templateUrl: './repositorio-card.component.html',
   styleUrls: ['./repositorio-card.component.scss'],
})
export class RepositorioCardComponent {
   @Input() repositorio!: RepositorioModel;
   language = '';

   goToRepository() {
      this.goToURL(this.repositorio.html_url);
   }
   goToSite() {
      this.goToURL(this.repositorio.homepage);
   }

   goToURL(link: string) {
      window.open(link.toString(), '_blank');
   }

   getIconLanguage() {
      switch (this.repositorio.language.toLowerCase()) {
         case 'c++':
            return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg';
         case 'shell':
            return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg';
         case 'dockerfile':
            return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg';
         case 'html':
            return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
         case 'css':
            return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
         case 'vue':
            return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg';
         case 'ejs':
            return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
         default:
            this.language = this.repositorio.language.toLowerCase();
            return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${this.language}/${this.language}-original.svg`;
      }
   }
}
