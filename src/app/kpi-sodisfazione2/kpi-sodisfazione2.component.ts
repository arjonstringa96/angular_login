import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'kpi-sodisfazione2',
  templateUrl: './kpi-sodisfazione2.component.html',
  styleUrls: ['./kpi-sodisfazione2.component.css']
})
export class KpiSodisfazione2Component {

     
        constructor(private elementRef: ElementRef) {
          
         }
      
         init = async () => {
          const obj =  Globals.getNebula();
      
          obj.render({
            element: document.querySelector('#smileindexSod2'),
            id: 'jRpkqS'});
            obj.render({
              element: document.querySelector('#sodisfazioneSod2'),
              id: 'QpyyHA'});
              obj.render({
                element: document.querySelector('#npsSod2'),
                id: 'PnfYyex'});
                obj.render({
                  element: document.querySelector('#feedbackSod2'),
                  id: 'TgmAKDj'});
      
            
          
               
        }
      
    
        ngOnInit() {
          this.init();
        }
      }
    
    
    
    
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  


