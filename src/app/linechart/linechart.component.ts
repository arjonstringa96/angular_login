
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-linechart',
      templateUrl: './linechart.component.html',
      styleUrls: ['./linechart.component.css']
    })
    export class LinechartComponent implements OnInit {
    
      constructor() { }
    
      viz1 = {
        type: 'selections',
        style: {
          width: '100%',
          paddingTop: '50px'
        }
      };
    

      
      viz2 = {
        type: 'lineChart',
        properties: {
          qInfo:{
            qId:'qd-2',
            qType:'lineChart'
          },
          qHyperCubeDef: {
            qDimensions: [
              { qDef: { qFieldDefs: ['Group Data'] } },
            ],
            qMeasures: [
              { qDef: { qDef: ['Ingressi'], autoSort: false }, qSortBy: { qSortByNumeric: 1 } },
            ],
            qInterColumnSortOrder: [1, 0],
          },
          showTitles: true,
          title: 'Line-chart',
          subtitle: 'Sample supernova linechart',
          footnote: '',
        },
        style: {
          width: '100%',
          height: '600px',
          paddingTop: '100px'
        }
      };
    


      
      ngOnInit(): void {
      }
    
    }












    
// 	// viz2 = {
//   //   type: 'lineChart',
//   //   properties: {
      
//   //     qHyperCubeDef: {
//   //       qDimensions: [
//   //         { qDef: { qFieldDefs: ['Group Data'] } },
//   //       ],
//   //       qMeasures: [
//   //         { qDef: { qDef: ['Ingressi'], autoSort: false }, qSortBy: { qSortByNumeric: 1 } },
//   //       ],
//   //       qInterColumnSortOrder: [1, 0],
//   //     },
//   //     showTitles: true,
//   //     title: 'Line-chart',
//   //     subtitle: 'Sample supernova linechart',
//   //     footnote: '',
//   //   },
//   //   style: {
//   //     width: '100%',
//   //     height: '600px',
//   //     paddingTop: '100px'
//   //   }
//   };


//   ngOnInit(): void {
//   }

// }
