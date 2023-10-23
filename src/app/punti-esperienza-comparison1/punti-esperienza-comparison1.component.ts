
import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'punti-esperienza-comparison1',
  templateUrl: './punti-esperienza-comparison1.component.html',
  styleUrls: ['./punti-esperienza-comparison1.component.css']
})
export class PuntiEsperienzaComparison1Component {

  
    constructor(private elementRef: ElementRef , private globals : Globals) {
      
     }
  
     init = async () => {
      const obj =  this.globals.getNebula();
  
      obj.render({
        element: document.querySelector('#puntiEsperienzaComparison1'),
        id: 'DCdScu'});  
    }
  
    ngOnInit() {
      this.init();
    }
  }
  
  
  
  
  
  
  
  
  
