import { Component ,ElementRef } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'periodo-comparison4',
  templateUrl: './periodo-comparison4.component.html',
  styleUrls: ['./periodo-comparison4.component.css']
})
export class PeriodoComparison4Component {
    
    constructor(private elementRef: ElementRef) {
      
     }
  
     init = async () => {
      const obj =  Globals.getNebula();
  
      obj.render({
        element: document.querySelector('#cx41'),
        id: 'XscEyA'});
  
        obj.render({
          element: document.querySelector('#ingressi41'),
          id: 'wQjkS'
          
        });
        obj.render({
          element: document.querySelector('#incassoIngressi41'),
          id: '84aeb0bb-1193-4c82-88ca-b84f7b0944ea'});

      obj.render({
      element: document.querySelector('#incassoCro41'),
      id: 'ydsek'
      
    });
   
    
      obj.render({
        element: document.querySelector('#scontrinoMedio41'),
        id: 'MHrka'});
      
           
    }
  

    ngOnInit() {
      this.init();
    }
  }






  








