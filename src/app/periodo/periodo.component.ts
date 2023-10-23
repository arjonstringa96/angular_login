import { Component ,ElementRef } from '@angular/core';
import { Globals } from '../globals';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'periodo-container',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css'],

})
export class IdComponent {
  active = 1;
  setActive(tabNumber: number) {
    this.active = tabNumber;
  }


  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();

    obj.render({
      element: document.querySelector('#cx'),
      id: 'c2ff3908-7432-4d83-a952-0be71bac76bf'});

      obj.render({
        element: document.querySelector('#ingressi'),
        id: 'ccb941d4-b36b-438e-a070-83a00d2163d8'
        
      });
  obj.render({
    element: document.querySelector('#incasso'),
    id: 'fnwVP'
    
  });
  // obj.render({
  //   element: document.querySelector('#datepicker'),
  //   id: 'WgKcev'
    
  // });
  
    obj.render({
      element: document.querySelector('#scontrino'),
      id: 'AXxdSsw'});


      obj.render({
        element: document.querySelector('#incassoIngressi'),
        id: '34412465-9856-47b0-b716-8dc934920ed3'});


        obj.render({
          element: document.querySelector('#ingressiMeteo'),
          id: '8f4728d9-1259-4015-af6e-4ff29d78d0ba'});
         
  }


  
     
  
  ngOnInit() {
    this.init();
  }
}

