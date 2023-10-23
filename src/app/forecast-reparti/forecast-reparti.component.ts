import { Component,ElementRef, } from '@angular/core';
  import { Globals } from '../globals';
@Component({
  selector: 'forecast-reparti',
  templateUrl: './forecast-reparti.component.html',
  styleUrls: ['./forecast-reparti.component.css']
})
export class ForecastRepartiComponent {
  
    
    
  constructor(private globals : Globals) {
    
  }

  init = async () => {
   const obj =  this.globals.getNebula();
    
        obj.render({
          element: document.querySelector('#forecastReparti'),
          id: 'JDjR'});  
      }
    
      ngOnInit() {
        this.init();
      }
    }
    
    
    
    
    
  
  
  



