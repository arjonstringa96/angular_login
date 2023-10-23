// import enigma from 'enigma.js';
// declare module '@nebula.js/stardust';
import { Injectable } from '@angular/core';
import { embed } from '@nebula.js/stardust';
// import {datepicker} from '../../node_modules/qlik-date-picker';

// import * as stardust from '@nebula.js/stardust';

// const pieChart = require('@nebula.js/sn-line-chart');
// const sankeyChart = require('@nebula.js/sn-line-chart');
// const funnelChart = require('@nebula.js/sn-line-chart');
// const mekkoChart = require('@nebula.js/sn-line-chart');
// import { QlikService } from './qlik-service.service';
// const qlikdashboardbundle = require('@nebula.js/dashboard-bundle');
@Injectable({
  providedIn: 'root'
})



export class Globals{
private enigma = require('enigma.js');
private kpi = require("@nebula.js/sn-kpi")
private combochart = require('@nebula.js/sn-combo-chart');
private filterpane = require("@nebula.js/sn-filter-pane")
private pivotTable = require('@nebula.js/sn-pivot-table')
// private datepicker = require('qlik-date-picker')
// import schema from 'enigma.js/schemas/12.170.2.json';
// const  embed =  require('@nebula.js/stardust')
private lineChart = require('@nebula.js/sn-line-chart');
// const kpi = require('@nebula.js/sn-kpi')
private barChart = require('@nebula.js/sn-line-chart');

  //config object contains configuration settings for the Qlik Sense app connection,                                                                
//such as the host URL, app ID, and web integration ID.
private config = {
  host: 'https://smilein.eu.qlikcloud.com',                 
  appId: '77c3954d-ce54-4337-9ca3-f54bf93f49e7',
  webIntegrationId: 'ZstNGu3zpJUHUz8-50_i-YKexhpdsyGL',
};



//n is a configuration object for Nebula.js. It specifies various settings like the theme, 
//language, and constraints for the visualization.

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

//Inside the types array, you have a configuration for a 
//specific visualization type, which is the 'lineChart'. It loads the 'lineChart' module when needed.

  types: [
    
      {
        name: "filterpane",
      load: () => this.filterpane,
      },
      {
        name: "filterpane",
      load: () => this.filterpane,
      },
    {
      name: 'lineChart',
      load: () => this.lineChart,
    },
    {
      name: 'pivotTable',
      load: () => this.pivotTable,
    },
    // {
    //   name: 'datepicker',
    //   load: () => this.datepicker,
    // },
    
    {
      name: 'combochart',
      load: () => this.combochart,
    },
    {
      name: 'barChart',
      load: () => this.barChart,
    },
    {
      name: 'kpi',
      load: () => this.kpi,
    },
 
  ],
});





// This asynchronous function retrieves CSRF headers required for authentication with Qlik Sense.

 public async getQCSHeaders() {
  const { host, webIntegrationId } = this.config;
  const response = await fetch(`${host}/api/v1/csrf-token`, {  //It makes a fetch request to the Qlik Sense server to obtain a CSRF token.
    credentials: 'include',
    headers: { 'qlik-web-integration-id': webIntegrationId, },
  });
  if (response.status === 401) {                                  //, it redirects the user to the login page with the web integration ID.
    const loginUrl = new URL(`${host}/login`);
    loginUrl.searchParams.append('returnto', window.location.href);
    loginUrl.searchParams.append('qlik-web-integration-id', webIntegrationId);
    window.location.href = String(loginUrl);
    return undefined;
  }
  const csrfToken = response.headers.get('qlik-csrf-token');   //It returns an object containing the 'qlik-web-integration-id' and 'qlik-csrf-token'.
  return 
    csrfToken;
    // 'qlik-web-integration-id': webIntegrationId,
    // 'qlik-csrf-token': csrfToken,
    
  
}
public connect = async () => {      //asynchronous function establishes a WebSocket connection to the Qlik Sense app.
  const { host, appId, webIntegrationId } = this.config;
  let url = `wss://${host}/app/${appId}`     //It constructs the WebSocket URL with the app ID and, if available, the web integration ID and CSRF token.
  let schema = require('enigma.js/schemas/12.20.0.json');

  if (webIntegrationId) {
    const headers = await this.getQCSHeaders();

    console.log(headers);
    // const headers: {
    //     'qlik-web-integration-id': any;
    //     'qlik-csrf-token': string;
    // }= await getQCSHeaders();
    url = `${url}?qlik-web-integration-id=${webIntegrationId}&qlik-csrf-token=${headers}`
    
  }
  console.log(url)
  const enigmaGlobal = await this.enigma    // nigma.js to create and open a connection to the Qlik Sense app, based on the provided schema.
    .create({
      schema,
      url,
    })
    .open();    //it returns a promise that resolves with the opened app.

  return enigmaGlobal.openDoc(this.config.appId);
}

private connectQlik = async () => {
    {

        const tenantUri = 'https://smilein.eu.qlikcloud.com';
        const webIntegrationId = 'ZstNGu3zpJUHUz8-50_i-YKexhpdsyGL';
        //const titleElement = document.getElementById('title');
    
        async function request(path: string, returnJson = true) {
          const res = await fetch(`${tenantUri}${path}`, {
            mode: 'cors',
            credentials: 'include',
            redirect: 'follow',
            headers: {
              // web integration is sent as a header:
              'qlik-web-integration-id': webIntegrationId,
            },
          });
          if (res.status < 200 || res.status >= 400) throw res;
          return returnJson ? res.json() : res;
        }
    
        try {
          // call your-tenant.us.qlikcloud.com/api/v1/users/me to
          // retrieve the user metadata, as a way to detect if they
          // are signed in. An error will be thrown if the response
          // is a non-2XX HTTP status:
          const user = await request('/api/v1/users/me');
          //document.getElementById('intro').innerHTML = `Hello, ${user.name}`;
          console.log(`Hello, ${user.name}`);
        } catch (err) {
          const returnTo = encodeURIComponent(window.location.href);
          // redirect your user to the tenant log in screen, and once they're
          // signed in, return to your web app:
          window.location.href = `${tenantUri}/login?returnto=${returnTo}&qlik-web-integration-id=${webIntegrationId}`;
        }
    
        
          // fetch the CSRF token:
          const res = await request('/api/v1/csrf-token', false);
          const csrfToken = res.headers.get('qlik-csrf-token');
    
          // fetch the list of available apps:
          const apps = await request('/api/v1/items?resourceType=app');
    
          if (!apps.data.length) {
            //titleElement.innerHTML = 'No apps available';
            console.log( 'No apps available');
            
          }
    
          // grab the first app ID in the list:
          //const appId = apps.data[0].resourceId;
          const appId = '77c3954d-ce54-4337-9ca3-f54bf93f49e7';
    
          // build a websocket URL:
          const url = `${tenantUri.replace(
              'https',
              'wss'
          )}/app/${appId}?qlik-web-integration-id=${webIntegrationId}&qlik-csrf-token=${csrfToken}`;
    
          // fetch the engine API schema:
          const schema = await (await fetch('https://unpkg.com/enigma.js@2.7.0/schemas/12.612.0.json')).json();
    
          // create the enigma.js session:
          const session = this.enigma.create({ url, schema });
          const global = await session.open();
    
          // open the app, and fetch the layout:
          return  global.openDoc(appId)
            
          }
   
}


  private  nebula: any ;
  public  connection = async () => {
     this.nebula = await this.connectQlik();
    
  }

public  getNebula()
{
  return this.n(this.nebula);
  
}}

