import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'periodo-comparison2',
  templateUrl: './periodo-comparison2.component.html',
  styleUrls: ['./periodo-comparison2.component.css']
})
export class PeriodoComparison2Component {

  
  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();
  
      obj.render({
        element: document.querySelector('#cx21'),
        id: 'THbmzXJ'});
  
        obj.render({
          element: document.querySelector('#ingressi21'),
          id: 'uGEaDq'
          
        });
        obj.render({
          element: document.querySelector('#incassoIngressi21'),
          id: 'cf9e51ff-a55b-42ef-933c-e36fba6bd3ba'});

      obj.render({
      element: document.querySelector('#incassoCro21'),
      id: 'yjkVYg'
      
    });
   
    
      obj.render({
        element: document.querySelector('#scontrinoMedio21'),
        id: 'mzFRxXU'});
      
           
    }
  
  
    
       
    
    ngOnInit() {
      this.init();
    }
  }






  


