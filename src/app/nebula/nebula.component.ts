import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Globals } from '../globals';
import { filter } from 'rxjs';

@Component({
  selector: 'nebula',
  template: ``,
  styles: []
})

export class NebulaComponent implements OnInit {

  @Input() app!: any;
  @Input() type!: string ;
  @Input() properties!: object;

  constructor(private elementRef: ElementRef) {
    
   }

   init = async () => {
    const nebula = await Globals.nebulaPromise();
    const { type, properties } = this;
    // const filterElement = document.querySelector('#filter');
    console.log('check if type and properties come from this',this);
console.log('consoles logs the type',type)
console.log('consoles logs the properties',properties)
if (type === 'selections') {
  try {
    const selections = await nebula.selections();
    selections.mount(this.elementRef.nativeElement);
  // const field = await nebula.field('GeneralTimestamp.ResultTimestamp');
  // field.mount(this.elementRef.nativeElement, { title: 'Timestamp' } );
  nebula.render({
    element: this.elementRef.nativeElement,
    id: 'ZkuTsBU'
    
  });
  nebula.render({
    element: this.elementRef.nativeElement,
    id: '40b82fc2-f80c-419e-bf9c-79cf818c7b57'});
  } catch (error) {
    console.error('Error fetching selections:', error);
    
  }
} else {
  try {
    nebula.render({
      element: this.elementRef.nativeElement,
      type,
      properties,
    });
  } catch (error) {
    console.error('Error rendering nebula:', error);
    // Handle the error appropriately, e.g., display a message to the user.
  }
}
}
     
  
  ngOnInit() {
    this.init();
  }
}






