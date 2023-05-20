import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public formula: string = "";
  public Resultado: string = "coloque la formula";
  public display: string = "0";
  private resultado = "";
  private formular = "";
  public error: boolean = false;
  public tipo: boolean = false;
  public nombre: string = "CTF";
  private valAnterior: string = "";
  constructor() { }

  ngOnInit(): void {
    // calcoladora
  }


  isNumeric(val: string) {
    return /^[0-9/-]+([.][0-9]+)?$/.test(val);
  }


  mostrar(valor: string) {
    this.error = false;
    if (this.resultado != "") {
      this.resultado = "",
        this.display = this.formular;
    }
    if (this.display == "0") {
      this.display = "";
    }
    if (valor == "%") {
      let x = 1;
      this.valAnterior = "";
      while (this.isNumeric(this.display.charAt(this.display.length - x))) {
        this.valAnterior = this.display.charAt(this.display.length - x) + this.valAnterior;
        x++;
        console.log("val anterior", this.valAnterior);

      }
      this.display = this.display.substring(0, this.display.length - x + 1);
      console.log(this.display);
      valor = (eval(this.valAnterior) / 100).toString();

    }
    if (valor == "π") {
      valor = (Math.PI).toString();
    }
    if (valor == "mod") {
      valor = "%";
    }

    this.display = this.display + valor;

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

    this.formula = "";
    this.Resultado = "coloque la formula";
  }
  // calcoladora
  AC() {
    this.error = false;
    this.display = "0";
    this.resultado = "";
    this.formular = "";
  }
  C() {
    this.error = false;
    if (this.formular.length > 0) {
      this.display = this.formular;
      this.resultado = "";
      this.formular = "";
    }
    this.display = this.display.substr(0, this.display.length - 1)
    this.display = (this.display == "") ? "0" : this.display;
  }
  calc() {
    this.formular = this.display;
    try {
      this.resultado = eval(this.display);
    } catch {
      this.resultado = "error"
      this.error = true;
    }
    this.display = this.formular + "\n" + this.resultado;
  }
  cambiar() {
    this.tipo = !this.tipo;
    if (this.tipo) {
      this.nombre = "STD";
    } else {
      this.nombre = "CTF";
    }
  }







}

