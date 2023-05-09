import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {
@Input() cont = 0;
  constructor() { }
  
@Output ()respuesta:EventEmitter <number>= new EventEmitter();
  ngOnInit(): void {
  }
  sumar(){
    this.cont++;
    console.log(this.cont);
    this.respuesta.emit(this.cont);
  }
}

