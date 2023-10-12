import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'app-periodo-comparison4',
  templateUrl: './periodo-comparison4.component.html',
  styleUrls: ['./periodo-comparison4.component.css']
})
export class PeriodoComparison4Component {
    
    constructor(private elementRef: ElementRef) {
      
     }
  
     init = async () => {
      const obj =  Globals.getNebula();
  
      obj.render({
        element: document.querySelector('#cx'),
        id: 'XscEyA'});
  
        obj.render({
          element: document.querySelector('#ingressi'),
          id: 'wQjkS'
          
        });
        obj.render({
          element: document.querySelector('#incassoIngressi'),
          id: '84aeb0bb-1193-4c82-88ca-b84f7b0944ea'});

      obj.render({
      element: document.querySelector('#incassoCro'),
      id: 'ydsek'
      
    });
   
    
      obj.render({
        element: document.querySelector('#scontrinoMedio'),
        id: 'MHrka'});
      
           
    }
  

    ngOnInit() {
      this.init();
    }
  }






  








