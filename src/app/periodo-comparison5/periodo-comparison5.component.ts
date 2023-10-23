import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'periodo-comparison5',
  templateUrl: './periodo-comparison5.component.html',
  styleUrls: ['./periodo-comparison5.component.css']
})
export class PeriodoComparison5Component {
 
  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();
  
      obj.render({
        element: document.querySelector('#cx51'),
        id: 'PPxdek'});
  
        obj.render({
          element: document.querySelector('#ingressi51'),
          id: 'mXygASV'
          
        });
        obj.render({
          element: document.querySelector('#incassoIngressi51'),
          id: '3fea4562-24d9-4b27-b9ad-a28cdb310787'});

      obj.render({
      element: document.querySelector('#incassoCro51'),
      id: 'pWBFSk'
      
    });
   
    
      obj.render({
        element: document.querySelector('#scontrinoMedio51'),
        id: 'dKGJgmJ'});
      
           
    }
  

    ngOnInit() {
      this.init();
    }
  }






  













