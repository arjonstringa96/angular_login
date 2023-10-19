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
          element: document.querySelector('#smileindex'),
          id: 'cuqWPN'});
          obj.render({
            element: document.querySelector('#sodisfazione'),
            id: 'dvjHcn'});
            obj.render({
              element: document.querySelector('#nps'),
              id: 'GMABDSM'});
              obj.render({
                element: document.querySelector('#feedback'),
                id: 'JMMjAsY'});
    
          
        
             
      }
    
  
      ngOnInit() {
        this.init();
      }
    }
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  


