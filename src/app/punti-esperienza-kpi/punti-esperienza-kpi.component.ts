import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'punti-esperienza-kpi',
  templateUrl: './punti-esperienza-kpi.component.html',
  styleUrls: ['./punti-esperienza-kpi.component.css']
})
export class PuntiEsperienzaKPIComponent {

  constructor(private elementRef: ElementRef,private globals : Globals) {
    
   }

   init = async () => {
    const obj =  this.globals.getNebula();

    obj.render({
      element: document.querySelector('#puntiEsperienzaKpi'),
      id: 'ZkuTsBU'});  
  }

  ngOnInit() {
    this.init();
  }
}








