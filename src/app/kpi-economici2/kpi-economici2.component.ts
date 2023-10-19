import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'app-kpi-economici2',
  templateUrl: './kpi-economici2.component.html',
  styleUrls: ['./kpi-economici2.component.css']
})
export class KpiEconomici2Component {
   
  
     
        constructor(private elementRef: ElementRef) {
          
         }
      
         init = async () => {
          const obj =  Globals.getNebula();
      
          obj.render({
            element: document.querySelector('#ingressi'),
            id: 'WjypP'});
            obj.render({
              element: document.querySelector('#incasso'),
              id: 'HmWPZJ'});
              obj.render({
                element: document.querySelector('#scontrini'),
                id: 'nWxQCn'});
                obj.render({
                  element: document.querySelector('#scontrinoMedio'),
                  id: 'bhnu'});
                  obj.render({
                    element: document.querySelector('#conversionRate'),
                    id: 'NTJadwX'});
                    obj.render({
                      element: document.querySelector('#resaMq'),
                      id: 'LVpx'});
      
            
          
               
        }
      
    
        ngOnInit() {
          this.init();
        }
      }
    
    
    
    
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  







