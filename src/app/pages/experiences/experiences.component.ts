import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences = [
    {
      societa: 'Code Generations',
      jobTitle: 'Front End Developer',
      year: '2021-2022',
      description: 'Sviluppo componenti/widget per AEM – Adobe Experience Manager, CMS di Adobe. Utilizzo di HTML, Handlebars.js, SCSS, Javascript Vanilla, jQuery, Js ES6. Versioning tramite GIT.'
    },
    {
      societa: 'Code Generations',
      jobTitle: 'Front End Developer',
      year: '2019-2021',
      description: 'Sviluppo di applicazioni web mediante l’utilizzo di Angular7+, Angular Material, HTML, SCSS/SASS e framework PrimeNG. Gestione di versioni tramite GIT. Sviluppo applicazione in Ionic 4 (Angular) e utilizzo di SVN per versioning.'
    },
    {
      societa: 'cambiolavoro',
      jobTitle: 'Web Designer/ Web Master',
      year: '2012-2018',
      description: 'Sviluppo HTML, XHTML, HTML5, CSS, Bootstrap,  Javascript/jQuery, Visual Basic for Applications (VBA), redazione newsletter, utilizzo Lotus Domino Designer, Google Adsense, SEO/SEM, servizio help desk via telefono e via mail.'
    },
    {
      societa: 'Prima Pagina',
      jobTitle: 'Web Designer',
      year: '2009/2012',
      description: 'Sviluppo HTML, XHTML e CSS, gestione intranet, aggiornamento siti, redazione newsletter, SEO/SEM, CMS (Wordpress, Joomla, Docebo, MODx).'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    AOS.init();

  }

}
