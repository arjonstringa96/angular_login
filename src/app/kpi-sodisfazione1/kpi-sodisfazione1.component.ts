import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'kpi-sodisfazione1',
  templateUrl: './kpi-sodisfazione1.component.html',
  styleUrls: ['./kpi-sodisfazione1.component.css']
})
export class KpiSodisfazione1Component {

 

   
  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();
    
        obj.render({
          element: document.querySelector('#smileindexSod1'),
          id: 'cuqWPN'});
          obj.render({
            element: document.querySelector('#sodisfazioneSod1'),
            id: 'dvjHcn'});
            obj.render({
              element: document.querySelector('#npsSod1'),
              id: 'GMABDSM'});
              obj.render({
                element: document.querySelector('#feedbackSod1'),
                id: 'JMMjAsY'});
    
          
        
             
      }
    
  
      ngOnInit() {
        this.init();
      }
    }
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  


