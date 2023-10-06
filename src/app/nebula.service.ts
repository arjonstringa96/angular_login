import { Injectable } from '@angular/core';
import { embed , n} from '@nebula.js/stardust';
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/12.20.0.json');
const kpi = require("@nebula.js/sn-kpi")
const combochart = require('@nebula.js/sn-combo-chart');
const barChart = require('@nebula.js/sn-line-chart');
const lineChart = require('@nebula.js/sn-line-chart');
const filterpane = require("@nebula.js/sn-filter-pane")

const config = {
  host: 'https://smilein.eu.qlikcloud.com',                 
  appId: '77c3954d-ce54-4337-9ca3-f54bf93f49e7',
  webIntegrationId: 'ZstNGu3zpJUHUz8-50_i-YKexhpdsyGL',
};

@Injectable({
  providedIn: 'root'
})

export class NebulaService {
  private n = embed.createConfiguration({
    context: {
      theme: 'light',
      language: 'en-US',
      constraints: {
        active: false,
        passive: false,
        select: false,
      },
    },
    types: [
      {
        name: "filterpane",
      load: () => filterpane,
      },
   
    {
      name: 'lineChart',
      load: () => lineChart,
    },
    {
      name: 'combochart',
      load: () => combochart,
    },
    {
      name: 'barChart',
      load: () => barChart,
    },
    {
      name: 'kpi',
      load: () => kpi,
    },
 
  ],
});

  async initializeNebula() {
  
    const enigmaGlobal = await enigma    // enigma.js to create and open a connection to the Qlik Sense app, based on the provided schema.
    .create({
      schema,
      url:`wss://https://smilein.eu.qlikcloud.com/app/77c3954d-ce54-4337-9ca3-f54bf93f49e7`,
    })
    .open();   
    return enigmaGlobal.openDoc(config.appId);
    
  }

  

  public async initialize() {
    const app = await this.initializeNebula();
    return n(app);
}

}
