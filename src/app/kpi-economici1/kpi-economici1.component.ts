import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'kpi-economici1',
  templateUrl: './kpi-economici1.component.html',
  styleUrls: ['./kpi-economici1.component.css']
})
export class KpiEconomici1Component {

  
 
  
   
  
     
  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();
      
          obj.render({
            element: document.querySelector('#ingressiKpi1'),
            id: 'VTjRsn'});
            obj.render({
              element: document.querySelector('#incassoKpi1'),
              id: 'bArdZT'});
              obj.render({
                element: document.querySelector('#scontriniKpi1'),
                id: 'NwVBPBA'});
                obj.render({
                  element: document.querySelector('#scontrinoMedioKpi1'),
                  id: 'pjNSNbN'});
                  obj.render({
                    element: document.querySelector('#conversionRateKpi1'),
                    id: 'bWDzwr'});
                    obj.render({
                      element: document.querySelector('#resaMqKpi1'),
                      id: 'UPtLEL'});
      
            
          
               
        }
      
    
        ngOnInit() {
          this.init();
        }
      }
    
    
    
    
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  



