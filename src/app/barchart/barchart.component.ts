import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})

export class BarchartComponent implements OnInit {

  constructor() { }

	viz1 = {
    type: 'selections',
    style: {
      width: '100%',
      paddingTop: '50px'
    }
  };

	viz2 = {
    type: 'barChart',
    properties: {
      qHyperCubeDef: {
        qDimensions: [
          {
            qDef: { qFieldDefs: ['Anni'] },
          },
        ],
        qMeasures: [
          {
            qDef: { qDef: '=Ingressi(Ingressi)' },
          },
        ],
        qInterColumnSortOrder: [1, 0],
      },
      
          // qMatrix: [
          //   [
          //     {
          //       "qText": "1",
          //       "qNum": 1,
          //       "qElemNumber": 0,
          //       "qState": "O"
          //     },
          //     {
          //       "qText": "0.73213545326144",
          //       "qNum": 0.732135453261435,
          //       "qElemNumber": 0,
          //       "qState": "L"
          //     }
          //   ],
          //   [
          //     {
          //       "qText": "2",
          //       "qNum": 2,
          //       "qElemNumber": 1,
          //       "qState": "O"
          //     },
          //     {
          //       "qText": "0.66564685385674",
          //       "qNum": 0.6656468538567424,
          //       "qElemNumber": 0,
          //       "qState": "L"
          //     }
          //   ],
          //   [
          //     {
          //       "qText": "3",
          //       "qNum": 3,
          //       "qElemNumber": 2,
          //       "qState": "O"
          //     },
          //     {
          //       "qText": "0.66189019801095",
          //       "qNum": 0.6618901980109513,
          //       "qElemNumber": 0,
          //       "qState": "L"
          //     }
          //   ],
          //   [
          //     {
          //       "qText": "4",
          //       "qNum": 4,
          //       "qElemNumber": 3,
          //       "qState": "O"
          //     },
          //     {
          //       "qText": "0.98009621817619",
          //       "qNum": 0.9800962181761861,
          //       "qElemNumber": 0,
          //       "qState": "L"
          //     }
          //   ],
          //   [
          //     {
          //       "qText": "5",
          //       "qNum": 5,
          //       "qElemNumber": 4,
          //       "qState": "O"
          //     },
          //     {
          //       "qText": "0.48425585823134",
          //       "qNum": 0.4842558582313359,
          //       "qElemNumber": 0,
          //       "qState": "L"
          //     }
          //   ]
          // ],
          // "qTails": [
          //   {
          //     "qUp": 0,
          //     "qDown": 0
          //   }
          // ],
          // "qArea": {
          //   "qLeft": 0,
          //   "qTop": 0,
          //   "qWidth": 2,
          //   "qHeight": 5
          // }
        
      
      showTitles: true,
      title: 'Bar-chart',
      subtitle: 'Sample supernova barchart',
      footnote: 'Case Owner Group / Avg([Case Duration Time])',
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
