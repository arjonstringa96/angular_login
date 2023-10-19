import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'confronto-monte-ore',
  templateUrl: './confronto-monte-ore.component.html',
  styleUrls: ['./confronto-monte-ore.component.css']
})
export class ConfrontoMonteOreComponent {


 
  
  
  
    constructor(private elementRef: ElementRef) {
      
     }
  
     init = async () => {
      const obj =  Globals.getNebula();
  
      obj.render({
        element: document.querySelector('#confrontoMonte'),
        id: 'UTRut'});  
    }
  
    ngOnInit() {
      this.init();
    }
  }
  
  
  
  
  


