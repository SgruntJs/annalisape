import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[gradient]'
})
export class GradientDirective {
  nome = ''
  constructor(private element: ElementRef) { }

  ngAfterViewInit() {

    this.nome = this.element.nativeElement.innerHTML;
    this.element.nativeElement.innerHTML = '';
    for (var i = 0; i < this.nome.length; i++) {

      let letter = this.nome.charAt(i);
      this.element.nativeElement.innerHTML += `<span>${letter}</span>`
    }
  }

}
