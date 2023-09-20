import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Globals } from '../globals';

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
    console.log('check if type and properties come from this',this);
console.log('consoles logs the type',type)
console.log('consoles logs the properties',properties)
if (type === 'selections') {
  try {
    const selections = await nebula.selections();
    selections.mount(this.elementRef.nativeElement);
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


//     if (type === 'selections' ) {
//       // nebula.render({
        
//       //   element: document.querySelector("#object"),

//       //   type: "lineChart",

//       //   fields: ["Anni", "=Ingressi"],
          
        
                 
//       //          });

//       // nebula.render({  element: document.querySelector(".object"),  id: "XRGvaJ",});

//       const selections = await nebula.selections();
//       selections.mount(this.elementRef.nativeElement);
//     } else {
//       // nebula.render({id: "XRGvaJ"})
// nebula.render({
//                  element: this.elementRef.nativeElement,
//                  type,
//                   properties
                 
//                });
//               }}

              



      // const qInfo = {
      //   qId: '', // Set a valid object ID here
      //   qType: '', // Set a valid object type here
      // };

      // // Merge qInfo into the properties object
      //   const propertiesWithQInfo = { ...properties, qInfo };




