import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-punti-esperienza-comparison2',
  templateUrl: './punti-esperienza-comparison2.component.html',
  styleUrls: ['./punti-esperienza-comparison2.component.css']
})
export class PuntiEsperienzaComparison2Component {




  
    constructor(private elementRef: ElementRef,private globals : Globals) {
      
     }
  
     init = async () => {
      const obj =  this.globals.getNebula();
  
      obj.render({
        element: document.querySelector('#puntiEsperienzaComparison2'),
        id: 'SVLUBgz'});  
    }
  
    ngOnInit() {
      this.init();
    }
  }
  
  
  
  
  
  
  
  
  


