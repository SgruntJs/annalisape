import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[shakeName]'
})
export class ShakeNameDirective {

  nome = '';
  
  constructor(private element: ElementRef) {

  }

  ngAfterViewInit() {
    // console.log(this.element.nativeElement.innerHTML);
    this.nome = this.element.nativeElement.innerHTML;
    this.element.nativeElement.innerHTML = '';
    for (var i = 0; i < this.nome.length; i++) {
      // console.log(this.nome.charAt(i));
      let letter = this.nome.charAt(i);
      this.element.nativeElement.innerHTML += `<div class='shake'>${letter}</div>`
    }
  }



}
