import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kpi-prova',
  templateUrl: './kpi-prova.component.html',
  styleUrls: ['./kpi-prova.component.css']
})


export class KpiProvaComponent implements OnInit {

  constructor() { }

	

	ingressi = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'Ingressi',
              qLabel: 'Medium Priority Cases'
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 5, qHeight: 10 }],
      },
      showTitles: true,
      title: 'KPI',
      subtitle: 'Kpi Render',
    
    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px'
    }
  };


  camfolder = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'Sum({<[ResultCamFolder.sumIn]={1}>}[ResultCamFolder.vIN])',
              qLabel: 'Medium Priority Cases'
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
      },
      showTitles: true,
      title: 'KPI',
      subtitle: 'Kpi Render',
    
    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px'
    }
  };
  ngOnInit(): void {
  }

}

