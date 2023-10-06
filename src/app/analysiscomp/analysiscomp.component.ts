// import { Component, OnInit, ElementRef, Input } from '@angular/core';
//   import { Globals } from '../globals';
// @Component({
//   selector: 'analysiscomp',
//   template: '',
//   styles: []
// })
// export class AnalysiscompComponent implements OnInit {
  
//     @Input() app!: any;
//     @Input() type!: string ;
//     @Input() properties!: object;
  
//     constructor(private elementRef: ElementRef) {
      
//      }
  
//      init = async () => {
//       const nebula = await Globals.nebulaPromise();
//       const { type, properties } = this;
//       // const filterElement = document.querySelector('#filter');
//       console.log('check if type and properties come from this',this);
//   console.log('consoles logs the type',type)
//   console.log('consoles logs the properties',properties)
//   if (type === 'selections') {
//     try {
//       const selections = await nebula.selections();
//       selections.mount(this.elementRef.nativeElement);
//     nebula.render({
//       element: this.elementRef.nativeElement,
//       id: 'ZkuTsBU'
      
//     });
  
//     //c2ff3908-7432-4d83-a952-0be71bac76bf
//     nebula.render({
//       element: this.elementRef.nativeElement,
//       id: 'uRpPQNR'
      
//     });
//     nebula.render({
//            element: this.elementRef.nativeElement,
//            id: 'GXwgTZ'});
//            nebula.render({
//             element: this.elementRef.nativeElement,
//             id: 'GXwgTZ'});
//             nebula.render({
//               element: this.elementRef.nativeElement,
//               id: 'GXwgTZ'});
          
    
//     } catch (error) {
//       console.error('Error fetching selections:', error);
      
//     }
//   } else {
//     try {
//       nebula.render({
//         element: this.elementRef.nativeElement,
//         type,
//         properties,
//       });
//     } catch (error) {
//       console.error('Error rendering nebula:', error);
//       // Handle the error appropriately, e.g., display a message to the user.
//     }
//   }
//   }
       
    
//     ngOnInit() {
//       this.init();
//     }
//   }
  
  
  
  
  
  
  

