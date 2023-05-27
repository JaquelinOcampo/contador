import { Component } from '@angular/core';

@Component({
  selector: 'you-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  public panelH: boolean = false;
  public historial: string = "historia";
  public borrar: boolean = false;
public error:boolean=false;
public cambiarh:boolean=false;
  mostrarPanel(x: boolean) {
    this.panelH = !this.panelH;
  }

  historial_(valor: string) {
    this.borrar = false;
    this.historial = valor;

  }
  borrarH() {
    this.historial = "";
    this.borrar = true;
  }
cambiar(){
  this.error=!this.error;
  this.cambiarh=!this.cambiarh;
  console.log(this.cambiarh);
}

}