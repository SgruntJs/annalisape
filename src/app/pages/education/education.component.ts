import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education = [
    {
      societa: 'Galdus',
      jobTitle: 'Specialista in Applicazioni Web e Multimediali',
      description: 'HTML, CSS, PHP, Javascript, Photoshop, Illustrator e Flash (Timeline e Actionscript 2.0)'
    },
    {
      societa: 'Studio TiConZero',
      jobTitle: 'Corso Web Designer I',
      description: 'Photoshop, Flash e Actionscript 2.0, XHTML e CSS'
    },
    {
      societa: 'Studio TiConZero',
      jobTitle: 'Corso Web Designer II',
      description: 'Photoshop, Flash e Actionscript 2.0, XHTML e CSS'
    },
    {
      societa: 'Università di pavia',
      jobTitle: 'Laurea Triennale in Scienze Biologiche',
      description: 'Tesi in “Tossicità dell\'Estratto secco di Bridelia Grandis in Cellule Umane in Vitro”'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
