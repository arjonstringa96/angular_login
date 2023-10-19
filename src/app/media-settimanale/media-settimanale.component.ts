import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'media-settimanale',
  templateUrl: './media-settimanale.component.html',
  styleUrls: ['./media-settimanale.component.css']
})
export class MediaSettimanaleComponent {
  active = 1;
  setActive(tabNumber: number) {
    this.active = tabNumber;
  }


  constructor(private elementRef: ElementRef) {
    
   }

   init = async () => {
    const obj =  Globals.getNebula();

    obj.render({
      element: document.querySelector('#cx4'),
      id: 'jWVxcR'});

      obj.render({
        element: document.querySelector('#ingressi4'),
        id: 'CuXqS'
        
      });
  obj.render({
    element: document.querySelector('#incasso4'),
    id: 'ehmzpCj'
    
  });
  
  
    obj.render({
      element: document.querySelector('#scontrino4'),
      id: 'PFfPLG'});


    
        obj.render({
          element: document.querySelector('#ingressiMeteo4'),
          id: 'c29eadd0-2719-4265-ba26-3528395c0b66'});
         
  }


  
     
  
  ngOnInit() {
    this.init();
  }
}


