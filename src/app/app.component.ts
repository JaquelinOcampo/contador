import { Component } from '@angular/core';

@Component({
  selector: 'you-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
 public panelH:boolean=false;

 mostrarPanel(x:boolean){
  this.panelH=!this.panelH;
 }
  
  

}
