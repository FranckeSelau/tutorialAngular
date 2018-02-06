import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter(); //passa um evento para frente - tem a saída @Output

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor}); //emite o novo valor acrescido.
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor}); //emite o novo valor acrescido.

  }

  constructor() { }

  ngOnInit() {
  }

}
