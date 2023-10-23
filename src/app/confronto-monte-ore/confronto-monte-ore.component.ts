import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'confronto-monte-ore',
  templateUrl: './confronto-monte-ore.component.html',
  styleUrls: ['./confronto-monte-ore.component.css']
})
export class ConfrontoMonteOreComponent {


 
  
  
  
  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();
  
      obj.render({
        element: document.querySelector('#confrontoMonte'),
        id: 'UTRut'});  
    }
  
    ngOnInit() {
      this.init();
    }
  }
  
  
  
  
  


