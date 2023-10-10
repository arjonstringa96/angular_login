import { Component } from '@angular/core';
// import { NebulaService } from '../../app/nebula.service'; // Adjust the path as needed

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent  {

  // constructor(
  //   private nebulaService: NebulaService,
  //   private elementRef: ElementRef
  // ) { }

  // ngOnInit() {
  //   // Use the NebulaService here
  //   this.initializeNebula();
  // }

  // async initializeNebula() {
  //   try {
  //     await this.nebulaService.initialize();
  //     // Initialize Nebula.js
  //     // Now you can use Nebula.js for rendering visualizations

  //     // Replace 'uRpPQNR' with the ID of your visualization
  //     this.renderNebulaVisualization('GXwgTZ');

  //   } catch (error) {
  //     console.error('Error initializing Nebula.js', error);
  //   }
  // }

  // renderNebulaVisualization(visualizationId: string) {
  //   const element = this.elementRef.nativeElement;
    
  //   // Render the Nebula.js visualization

  // }
}
