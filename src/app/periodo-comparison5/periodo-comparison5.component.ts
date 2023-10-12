import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-periodo-comparison5',
  templateUrl: './periodo-comparison5.component.html',
  styleUrls: ['./periodo-comparison5.component.css']
})
export class PeriodoComparison5Component {
 
    constructor(private elementRef: ElementRef) {
      
     }
  
     init = async () => {
      const obj =  Globals.getNebula();
  
      obj.render({
        element: document.querySelector('#cx'),
        id: 'PPxdek'});
  
        obj.render({
          element: document.querySelector('#ingressi'),
          id: 'mXygASV'
          
        });
        obj.render({
          element: document.querySelector('#incassoIngressi'),
          id: '3fea4562-24d9-4b27-b9ad-a28cdb310787'});

      obj.render({
      element: document.querySelector('#incassoCro'),
      id: 'pWBFSk'
      
    });
   
    
      obj.render({
        element: document.querySelector('#scontrinoMedio'),
        id: 'dKGJgmJ'});
      
           
    }
  

    ngOnInit() {
      this.init();
    }
  }






  













