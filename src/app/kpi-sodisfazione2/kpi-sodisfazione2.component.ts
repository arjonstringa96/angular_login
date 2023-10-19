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
            element: document.querySelector('#smileindex'),
            id: 'jRpkqS'});
            obj.render({
              element: document.querySelector('#sodisfazione'),
              id: 'QpyyHA'});
              obj.render({
                element: document.querySelector('#nps'),
                id: 'PnfYyex'});
                obj.render({
                  element: document.querySelector('#feedback'),
                  id: 'TgmAKDj'});
      
            
          
               
        }
      
    
        ngOnInit() {
          this.init();
        }
      }
    
    
    
    
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  


