import { HttpProgressEvent } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { interval, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  progressA = 0;
  progressB = 0;
  progressC = 0;
  progress = [0, 0, 0, 0, 0, 0, 0];

  skills = [
    {
      type: 'HTML',
      percent: 100
    },
    {
      type: 'CSS',
      percent: 95
    },
    {
      type: 'SCSS',
      percent: 85
    },
    {
      type: 'Javascript',
      percent: 70
    },
    {
      type: 'Angular',
      percent: 60
    },
    {
      type: 'Adattamento',
      percent: 100
    },
    {
      type: 'Ricerca',
      percent: 100
    },
  ]

  constructor() {
   

  }

  ngOnInit() {
    //const VALID_UPDATE_RATE_IN_MSEC = 250;
    const INVALID_UPDATE_RATE_IN_MSEC = 100;

    // interval(VALID_UPDATE_RATE_IN_MSEC).subscribe(val => this.progressA = 50)
    // interval(INVALID_UPDATE_RATE_IN_MSEC).subscribe(val => this.progressB = 60)
    // interval(INVALID_UPDATE_RATE_IN_MSEC).subscribe(val => this.progressC = 60)
    interval(INVALID_UPDATE_RATE_IN_MSEC).subscribe(() => {
      this.progress = [];
      this.skills.forEach(skill => {
        this.progress.push(skill.percent);
      });
      this.progress;

    }

    
    )
    
    // infinite loop when reaching max value
    interval(100 * 100).subscribe(() => this.resetProgress())
  }





  private resetProgress() {
    // this.progressA = this.skills[0].percent;
    // this.progressB = this.skills[1].percent;
    this.progress;
  }


}

export function response(input: any) {
  //Insert your code here 
  const response = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 == 0) response.push("FizzBuzz");
    else if (i % 3 == 0) response.push("Fizz");
    else if (i % 5 == 0) response.push("Buzz");
    else response.push(i);
  }
  return response;
}