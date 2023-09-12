import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'nebula',
  template: ``,
  styles: []
})

export class NebulaComponent implements OnInit {

  @Input() app: any;
  @Input() type: string='' ;
  @Input() properties: object={};

  constructor(private elementRef: ElementRef) {
    
   }

   init = async () => {
    const nebula = await Globals.nebulaPromise();
    const { type, properties } = this;
    console.log(this);
console.log(type)
console.log(properties)

     
    if (type === 'selections' ) {
      const selections = await nebula.selections();
      selections.mount(this.elementRef.nativeElement);
    } else {

      
      const qInfo = {
        qId: '', // Set a valid object ID here
        qType: '', // Set a valid object type here
      };

      // Merge qInfo into the properties object
        const propertiesWithQInfo = { ...properties, qInfo };

      nebula.render({
                 element: this.elementRef.nativeElement,
                 type,
                  properties:propertiesWithQInfo
                 
               });
    }
  }
  

  
// nebula.render({
      //            element: this.elementRef.nativeElement,
      //            type,
      //             properties
                 
      //          });

      
     
  
  
  ngOnInit() {
    this.init();
  }
}







