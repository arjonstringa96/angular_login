import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'periodo-comparison2',
  templateUrl: './periodo-comparison2.component.html',
  styleUrls: ['./periodo-comparison2.component.css']
})
export class PeriodoComparison2Component {

  
    constructor(private elementRef: ElementRef) {
      
     }
  
     init = async () => {
      const obj =  Globals.getNebula();
  
      obj.render({
        element: document.querySelector('#cx'),
        id: 'THbmzXJ'});
  
        obj.render({
          element: document.querySelector('#ingressi'),
          id: 'uGEaDq'
          
        });
        obj.render({
          element: document.querySelector('#incassoIngressi'),
          id: 'cf9e51ff-a55b-42ef-933c-e36fba6bd3ba'});

      obj.render({
      element: document.querySelector('#incassoCro'),
      id: 'yjkVYg'
      
    });
   
    
      obj.render({
        element: document.querySelector('#scontrinoMedio'),
        id: 'mzFRxXU'});
      
           
    }
  
  
    
       
    
    ngOnInit() {
      this.init();
    }
  }






  


