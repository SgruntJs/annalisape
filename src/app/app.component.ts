import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';
import * as AOS from 'aos';


declare let particlesJS: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'annalisape';
  public ngOnInit(): void {
    this.invokeParticles();
    AOS.init();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
