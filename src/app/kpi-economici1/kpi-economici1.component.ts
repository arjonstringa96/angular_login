import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'app-kpi-economici1',
  templateUrl: './kpi-economici1.component.html',
  styleUrls: ['./kpi-economici1.component.css']
})
export class KpiEconomici1Component {

  
 
  
   
  
     
        constructor(private elementRef: ElementRef) {
          
         }
      
         init = async () => {
          const obj =  Globals.getNebula();
      
          obj.render({
            element: document.querySelector('#ingressi'),
            id: 'VTjRsn'});
            obj.render({
              element: document.querySelector('#incasso'),
              id: 'bArdZT'});
              obj.render({
                element: document.querySelector('#scontrini'),
                id: 'NwVBPBA'});
                obj.render({
                  element: document.querySelector('#scontrinoMedio'),
                  id: 'pjNSNbN'});
                  obj.render({
                    element: document.querySelector('#conversionRate'),
                    id: 'bWDzwr'});
                    obj.render({
                      element: document.querySelector('#resaMq'),
                      id: 'UPtLEL'});
      
            
          
               
        }
      
    
        ngOnInit() {
          this.init();
        }
      }
    
    
    
    
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  



