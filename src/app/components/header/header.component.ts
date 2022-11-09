
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { NavList } from '../../enum/nav.enum';
import { faFilm, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @ViewChild('scrollable', { static: false }) nav!: ElementRef<HTMLElement>;
  navList = NavList;
  currentPosition = 0;
  enumKeys: any[] = [];
  menuIcon = faBars;

  constructor() {
    this.enumKeys = Object.entries(this.navList);// mi trasforma il file enum in un array di ogegtti
  }

  ngOnInit() {
    window.addEventListener('scroll', function(){
      const header = document.querySelector('.header');
      header?.classList.toggle("sticky", window.scrollY > 0);
    })
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }


  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event: any) {
  //   let scroll = window.pageYOffset;
  //   if (scroll > 120) {
  //     console.log('scrollDown');
  //     document.querySelector('.toolbar-nav')?.classList.add('sticky');
  //     //this.nav.nativeElement.classList.add('sticky');
  //   } else {
  //     console.log('scrollUp');
  //     document.querySelector('.toolbar-nav')?.classList.remove('sticky');
  //     // this.nav.nativeElement.classList.remove('sticky');

  //   }
  //   console.log(scroll);
  //   this.currentPosition = scroll;
  // }



}