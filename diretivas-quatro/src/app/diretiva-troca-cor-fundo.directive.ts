import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[DiretivaTrocaCorFundo]'
})
export class DiretivaTrocaCorFundoDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
          ) {
    //console.log(this._elementRef); // sempre que precisar so caminho do atributo para descobrir
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'; evitar devido vulnerabilidade
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'backgroundColor', 'yellow')
  }

}
