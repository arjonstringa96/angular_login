import { Component,ElementRef, } from '@angular/core';
import { Globals } from '../../globals';
@Component({
  selector: 'comparison-reparti-graph1',
  templateUrl: './comparison-reparti-graph1.component.html',
  styleUrls: ['./comparison-reparti-graph1.component.css']
})
export class ComparisonRepartiGraph1Component {


  constructor(private globals : Globals) {
    
   }

   init = async () => {
    const obj =  this.globals.getNebula();

    obj.render({
      element: document.querySelector('#comparisonReparti1'),
      id: '80d6fd90-ba76-4ae5-bcfe-0497c0517e93'});  
  }

  ngOnInit() {
    this.init();
  }
}









