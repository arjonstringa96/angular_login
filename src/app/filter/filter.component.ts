import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor() { }

	

	filter = {
    type: "filterpane",
   fields: [
        {
        qListObjectDef: {
            qDef: {qFieldDefs: ["Quarter"]},
            frequencyEnabled: true ,
            qFrequencyMode: "P"
        },
        },
        {
          qListObjectDef: {
            qDef: {qFieldDefs: ["City"]},
            frequencyEnabled: true ,
            qFrequencyMode: "V"
        },
      },
    ],

  };


  
  ngOnInit(): void {
  }
}







  