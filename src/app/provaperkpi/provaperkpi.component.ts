import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-provaperkpi',
  templateUrl: './provaperkpi.component.html',
  styleUrls: ['./provaperkpi.component.css']
})
export class ProvaperkpiComponent {




 

   
      constructor(private elementRef: ElementRef) {
        
       }
    
       init = async () => {
        const obj =  Globals.getNebula();
    
        obj.render({
          element: document.querySelector('#prova'),
          id: 'UTRut'});
          
      }
    
  
      ngOnInit() {
        this.init();
      }
    }
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  






