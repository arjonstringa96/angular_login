import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'confronto-ingressi',
  templateUrl: './confronto-ingressi.component.html',
  styleUrls: ['./confronto-ingressi.component.css']
})
export class ConfrontoIngressiComponent {



  constructor(private elementRef: ElementRef) {
    
   }

   init = async () => {
    const obj =  Globals.getNebula();

    obj.render({
      element: document.querySelector('#confrontoIngressi'),
      id: 'mWLDN'});  
  }

  ngOnInit() {
    this.init();
  }
}




