import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-restar',
  templateUrl: './restar.component.html',
  styleUrls: ['./restar.component.css']
})
export class RestarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() cont = 0;
 
  
@Output() respuesta:EventEmitter <number>= new EventEmitter();
 
  restar(){
    this.cont--;
    console.log(this.cont);
    this.respuesta.emit(this.cont);
  }
  
  
}
