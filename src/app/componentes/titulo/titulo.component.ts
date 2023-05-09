import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  public contador:number = 100;
  constructor() { }

  ngOnInit(): void {
  }
renderizar(valor:number) {
  this.contador=valor;

}
}
