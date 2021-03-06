import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.sass']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["angular2", "materialize"];
  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
