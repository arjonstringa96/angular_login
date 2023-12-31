import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'media-oraria',
  templateUrl: './media-oraria.component.html',
  styleUrls: ['./media-oraria.component.css']
})
export class MediaOrariaComponent {

  active = 1;
  setActive(tabNumber: number) {
    this.active = tabNumber;
  }


  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();

    obj.render({
      element: document.querySelector('#cx3'),
      id: 'GXwgTZ'});

      obj.render({
        element: document.querySelector('#ingressi3'),
        id: 'QgjhZp'
        
      });
  obj.render({
    element: document.querySelector('#incasso3'),
    id: 'BzNQCY'
    
  });
  
  
    obj.render({
      element: document.querySelector('#scontrino3'),
      id: 'eJPN'});


    
        obj.render({
          element: document.querySelector('#ingressiMeteo3'),
          id: 'd8eb663c-8ee7-42c2-af1a-46c8d0f104ad'});
         
  }


  
     
  
  ngOnInit() {
    this.init();
  }
}


// obj.render({
  //   element: document.querySelector('#datepicker'),
  //   id: 'WgKcev'
    
  // });