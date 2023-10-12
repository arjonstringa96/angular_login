import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'periodo-comparison3',
  templateUrl: './periodo-comparison3.component.html',
  styleUrls: ['./periodo-comparison3.component.css']
})
export class PeriodoComparison3Component {

  
  
    constructor(private elementRef: ElementRef) {
      
     }
  
     init = async () => {
      const obj =  Globals.getNebula();
  
      obj.render({
        element: document.querySelector('#cx'),
        id: 'DJKHLm'});
  
        obj.render({
          element: document.querySelector('#ingressi'),
          id: 'zjZMMm'
          
        });
        obj.render({
          element: document.querySelector('#incassoIngressi'),
          id: '5b8e9ae1-ccde-47c5-93cf-f0bf462ff0a8'});

      obj.render({
      element: document.querySelector('#incassoCro'),
      id: 'LsnPv'
      
    });
   
    
      obj.render({
        element: document.querySelector('#scontrinoMedio'),
        id: 'MVbPxq'});
      
           
    }
  
  
    
       
    
    ngOnInit() {
      this.init();
    }
  }






  





