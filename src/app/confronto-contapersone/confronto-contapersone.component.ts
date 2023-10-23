import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'confronto-contapersone',
  templateUrl: './confronto-contapersone.component.html',
  styleUrls: ['./confronto-contapersone.component.css']
})
export class ConfrontoContapersoneComponent {
  constructor(private elementRef: ElementRef,private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();

   obj.render({
     element: document.querySelector('#confrontoContapersone'),
     id: 'WGmGde'});

     
        
 }

 ngOnInit() {
   this.init();
 }
}

