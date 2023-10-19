import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'kpi-economici2',
  templateUrl: './kpi-economici2.component.html',
  styleUrls: ['./kpi-economici2.component.css']
})
export class KpiEconomici2Component {
   
  
     
        constructor(private elementRef: ElementRef) {
          
         }
      
         init = async () => {
          const obj =  Globals.getNebula();
      
          obj.render({
            element: document.querySelector('#ingressiKpi2'),
            id: 'WjypP'});
            obj.render({
              element: document.querySelector('#incassoKpi2'),
              id: 'HmWPZJ'});
              obj.render({
                element: document.querySelector('#scontriniKpi2'),
                id: 'nWxQCn'});
                obj.render({
                  element: document.querySelector('#scontrinoMedioKpi2'),
                  id: 'bhnu'});
                  obj.render({
                    element: document.querySelector('#conversionRateKpi2'),
                    id: 'NTJadwX'});
                    obj.render({
                      element: document.querySelector('#resaMqKpi2'),
                      id: 'LVpx'});
      
            
          
               
        }
      
    
        ngOnInit() {
          this.init();
        }
      }
    
    
    
    
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  







