import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'periodo-comparison6',
  templateUrl: './periodo-comparison6.component.html',
  styleUrls: ['./periodo-comparison6.component.css']
})
export class PeriodoComparison6Component {
 

   
  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();
    
        obj.render({
          element: document.querySelector('#cx61'),
          id: 'nZZzxj'});
    
          obj.render({
            element: document.querySelector('#ingressi61'),
            id: 'mLFjh'
            
          });
          obj.render({
            element: document.querySelector('#incassoIngressi61'),
            id: 'kGpLFa'});
  
        obj.render({
        element: document.querySelector('#incassoCro61'),
        id: 'vhfGJV'
        
      });
     
      
        obj.render({
          element: document.querySelector('#scontrinoMedio61'),
          id: 'TwWgPH'});
        
             
      }
    
  
      ngOnInit() {
        this.init();
      }
    }
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  



