import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-periodo-comparison6',
  templateUrl: './periodo-comparison6.component.html',
  styleUrls: ['./periodo-comparison6.component.css']
})
export class PeriodoComparison6Component {
 

   
      constructor(private elementRef: ElementRef) {
        
       }
    
       init = async () => {
        const obj =  Globals.getNebula();
    
        obj.render({
          element: document.querySelector('#cx'),
          id: 'nZZzxj'});
    
          obj.render({
            element: document.querySelector('#ingressi'),
            id: 'mLFjh'
            
          });
          obj.render({
            element: document.querySelector('#incassoIngressi'),
            id: 'kGpLFa'});
  
        obj.render({
        element: document.querySelector('#incassoCro'),
        id: 'vhfGJV'
        
      });
     
      
        obj.render({
          element: document.querySelector('#scontrinoMedio'),
          id: 'TwWgPH'});
        
             
      }
    
  
      ngOnInit() {
        this.init();
      }
    }
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  



