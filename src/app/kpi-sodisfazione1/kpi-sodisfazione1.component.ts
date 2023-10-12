import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'kpi-sodisfazione1',
  templateUrl: './kpi-sodisfazione1.component.html',
  styleUrls: ['./kpi-sodisfazione1.component.css']
})
export class KpiSodisfazione1Component {

 

   
      constructor(private elementRef: ElementRef) {
        
       }
    
       init = async () => {
        const obj =  Globals.getNebula();
    
        obj.render({
          element: document.querySelector('#kpi-sodisfazione1'),
          id: 'ZJeKET'});
    
          
        
             
      }
    
  
      ngOnInit() {
        this.init();
      }
    }
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  


