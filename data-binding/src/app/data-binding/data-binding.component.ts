import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImage = 'https://media.springernature.com/full/nature-static/assets/v1/image-assets/546349a-i1.jpg';

  cursoAngular: boolean = true;

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  
  nomeDoCurso: string = 'Angular'; //joga pelo data-bindind no html, dentro do seletor app-curso

  valorInicial: number = 12; // passando o valor do contador

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("clicado!!")
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit() {
  }

}
