import { Component, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.sass']
})
export class DiretivaNgswitchComponent implements OnInit {

  aba: string = 'home';
  
  constructor() { }

  ngOnInit() {
  }

}
