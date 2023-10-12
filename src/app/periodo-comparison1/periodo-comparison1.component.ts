import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
  import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'periodo-comparison1',
  templateUrl: './periodo-comparison1.component.html',
  styleUrls: ['./periodo-comparison1.component.css']
})
export class PeriodoComparison1Component {

  
  
    constructor(private elementRef: ElementRef) {
      
     }
  
     init = async () => {
      const obj =  Globals.getNebula();
  
      obj.render({
        element: document.querySelector('#cx'),
        id: 'NvwEwdA'});
  
        obj.render({
          element: document.querySelector('#ingressi'),
          id: 'pHnGpU'
          
        });
        obj.render({
          element: document.querySelector('#incassoIngressi'),
          id: '6cbd3efb-c3e0-4be3-bf0b-666cb6246015'});
    obj.render({
      element: document.querySelector('#incassoCro'),
      id: 'kjpyW'
      
    });
   
    
      obj.render({
        element: document.querySelector('#scontrinoMedio'),
        id: 'kjpyW'});
      
           
    }
  
  
    
       
    
    ngOnInit() {
      this.init();
    }
  }




