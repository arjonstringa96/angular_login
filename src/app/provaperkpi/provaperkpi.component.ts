import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-provaperkpi',
  templateUrl: './provaperkpi.component.html',
  styleUrls: ['./provaperkpi.component.css']
})
export class ProvaperkpiComponent {




 

   
      constructor(private elementRef: ElementRef, private globals : Globals) {
        
       }
    
       init = async () => {
        const obj =  this.globals.getNebula();
    
        obj.render({
          element: document.querySelector('#prova'),
          id: 'UTRut'});
          
      }
    
  
      ngOnInit() {
        this.init();
      }
    }
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  






