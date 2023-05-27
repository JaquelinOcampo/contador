import { Component, OnInit, Output, EventEmitter,Input} from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  @Output() mosHist: EventEmitter<boolean> = new EventEmitter();
  @Output() hist: EventEmitter<string> = new EventEmitter();
  @Input() borrarH = false;
  @Input() cambiarH = false;

  public formula: string = "";
  public Resultado: string = "coloque la formula";
  public display: string = "0";
  private resultado = "";
  private formular = "";
  public error: boolean = false;
  public tipo: boolean = false;
  public nombre: string = "CTF";
  private valAnterior: string = "";
  private historial: string = "";

  constructor() { }

  ngOnInit(): void {
    // calcoladora
  }
  isNumeric(val: string) {
    return /^[0-9-.]+([.][0-9]+)?$/.test(val);
  }
  sustraer(x: number) {
    return this.display.charAt(this.display.length - x);
  }

get cambiarcolor(){
  console.log("object");
  return this.cambiarH;
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
      while (this.isNumeric(this.sustraer(x))) {
        this.valAnterior = this.sustraer(x) + this.valAnterior;
        x++;
        // console.log("val anterior", this.valAnterior);

      }
      this.display = this.display.substring(0, this.display.length + 1 - x);
      valor = (eval(this.valAnterior) / 100).toFixed(3).toString();
      //console.log(this.display);
    }
    if (valor == "π") {
      valor = (Math.PI.toFixed(4).toString());
      let c = this.display.slice(-1);
      if (c != "(" && c != "+" && c != "-" && c != "/" && c != "*" && c != "d" && c != "." && this.display != "") {
        valor = "*" + valor;
      }
    }
    if (valor == "+/-") {
      let x = 1;
      this.valAnterior = "";
      while (this.isNumeric(this.sustraer(x))) {
        this.valAnterior = this.sustraer(x) + this.valAnterior;
        x++;


      }
      this.display = this.display.substring(0, this.display.length + 1 - x);
      valor = (eval(this.valAnterior) * -1).toString();


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
      this.resultado = eval(this.display.replace("mod", "%"));
    } catch {
      this.resultado = "error"
      this.error = true;
    }
    this.display = this.formular + "\n" + this.resultado;
    this.hayhistoria();
    this.historial = this.historial + "\n" + this.formular + "=" + this.resultado;
    this.mostrarHistoria();
  }
  cambiar() {
    this.tipo = !this.tipo;
    if (this.tipo) {
      this.nombre = "STD";
    } else {
      this.nombre = "CTF";
    }
  }
  mostrarPanel() {
    this.mosHist.emit(true);
  }


  mostrarHistoria() {
    this.hayhistoria();
    this.hist.emit(this.historial);

  }
  hayhistoria(){
    if(this.borrarH){
      this.historial="";
      this.borrarH=false;

    }
  }


}

