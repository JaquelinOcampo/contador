import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public formula: string = "";
  public Resultado: string = "coloque la formula";
  public display: string="0";
  private resultado="";
  private formular="";
  public error:boolean =false;
  public tipo:boolean=false;
  public nombre:string="ctf";
  constructor() { }

  ngOnInit(): void {
// calcoladora
  }
  mostrar(valor: string){
    this.error=false;
    if(this.resultado!=""){
      this.resultado="",
      this.display=this.formular;
    }
    if(this.display=="0"){
      this.display="";
    }
    this.display=this.display+valor;
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
  // calcoladora
AC(){
  this.error=false;
  this.display="0";
  this.resultado="";
  this.formular="";
}
C(){
  this.error=false;
  if(this.formular.length>0){
    this.display=this.formular;
    this.resultado="";
    this.formular="";
  }
  this.display=this.display.substr(0,this.display.length-1)
  this.display=(this.display=="")?"0":this.display;
}
calc(){
  this.formular=this.display;
  try {
    this.resultado=eval(this.display);
  }catch {
    this.resultado="error"
    this.error=true;
  }
  this.display=this.formular+"\n"+this.resultado;
}
cambiar(){
this.tipo=!this.tipo;
if(this.tipo){
  this.nombre="STD";
}else{
  this.nombre="CTF";
}
}







}

