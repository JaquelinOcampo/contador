import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public formula: string = "";
  public Resultado: string = "coloque la formula";
  constructor() { }

  ngOnInit(): void {
  }
  calcular() {
    let x = eval(this.formula);
    this.Resultado = this.formula + "=" + x;
    this.formula = "";
  }
  retroceso() {
    this.formula = this.formula.substr(0, this.formula.length - 1);
  }
  limpiar() {
    this.formula="";
    this.Resultado="coloque la formula";
  }


}
