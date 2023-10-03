import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kpi-prova',
  templateUrl: './kpi-prova.component.html',
  styleUrls: ['./kpi-prova.component.css']
})


export class KpiProvaComponent implements OnInit {

  constructor() { }

// KPI CUSTOMER EXPERIENCE


  selection = {
    type: 'selections',
    style: {
      width: '100%',
      paddingTop: '0px'
    }
  };
	

	feedback = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'Feedback',
              qLabel: ''
              
            },
          },
          { 
            qDef: { 
              qDef: 'Feedback a.p.',
              qLabel: ''
              
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 5, qHeight: 10 }],
      },
      showTitles: true,
      title: 'feedback',
      subtitle: '',

    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px'
      
    }
  };
  Feedbackap = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'Feedback a.p.',
              qLabel: ''
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 5, qHeight: 10 }],
      },
      showTitles: true,
      title: 'Feedback a.p.',
      subtitle: '',

    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px'
      
    }
  };


  nps = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'NPS',
              qLabel: ''
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
      },
      showTitles: true,
      title: 'NPS',
      subtitle: '',

    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px',

    }
  };
   npsap = {
     type: 'kpi',
     properties: {
       qHyperCubeDef: {
         qDimensions: [],
         qMeasures: [
           { 
             qDef: { 
               qDef: 'NPS a.p.',
               qLabel: ''
             },
           },
         ],
         qInitialDataFetch: [{ qWidth: 5, qHeight: 10 }],
       },
       showTitles: true,
       title: 'NPS a.p.',
       subtitle: '',

     },
     style: {
       width: '100%',
       height: '200px',
       paddingTop: '100px'
      
     }
   };
  smileindex = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'SMILEINdex',
              qLabel: ''
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
      },
      showTitles: true,
      title: 'SMILEINdex',
      subtitle: '',

    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px'
    }
  };
  SMILEINdexap = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'SMILEINdex a.p.',
              qLabel: ''
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 5, qHeight: 10 }],
      },
      showTitles: true,
      title: 'SMILEINdex a.p.',
      subtitle: '',

    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px'
      
    }
  };
  soddisfazione = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'Soddisfazione',
              qLabel: '',
              numFormat: { 
                qType: 'U',
                qnDec: 0, // Number of decimals (change as needed)
                qUseThou: 0,
                qFmt: '###,##0.00', // Format the number as needed
                // Add the "qUseColors" property to specify the color
                qUseColors: 1,
                // Set the color to red
                qColor: {
                  color: 255, // Red: 255, 0, 0 (R, G, B)
                  index: -1
                }
              }
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
      },
      showTitles: true,
      title: 'Soddisfazione',
      subtitle: '',

    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px'
    }
  };
  soddisfazioneap = {
    type: 'kpi',
    properties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [
          { 
            qDef: { 
              qDef: 'Soddisfazione',
              qLabel: ''              
            },
          },
        ],
        qInitialDataFetch: [{ qWidth: 5, qHeight: 10 }],
      },
      showTitles: true,
      title: 'Soddisfazione a.p.',
      subtitle: '',

    },
    style: {
      width: '100%',
      height: '200px',
      paddingTop: '100px'
      
    }
  };

// KPI ECONOMICI

incasso = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Incasso',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Incasso',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

IncassoAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Incasso a.p.',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              // qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Incasso a.p.',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

scontrinoMedio = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Scontrino medio',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
               color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Scontrino medio',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

scontrinoMedioAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Scontrino medio a.p.',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Scontrino medio a.p.',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

mqTotali = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Incasso',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Incasso',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

mqTotaliAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Incasso',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Incasso',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

conversionRate = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Conversion rate',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Conversion rate',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

convertionRateAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Conversion rate a.p.',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Conversion rate a.p.',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

resaMqAnno = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Resa MQ/anno',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Resa MQ/anno',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

resaMqAnnoAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Resa MQ/anno a.p.',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Resa MQ/anno a.p.',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

altro = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Incasso',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Incasso',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};



altroAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Incasso',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Incasso',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

scontrini = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Scontrini',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Scontrini',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

scontriniAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Scontrini a.p.',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Scontrini a.p.',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

Ingressi = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Ingressi',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Ingressi',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

IngressiAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Ingressi a.p.',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Ingressi a.p.',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

mqGiornagliero = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Ingressi/MQ Giornaliero',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Ingressi/MQ Giornaliero',
    subtitle: '',

  },
  style: {
    width: '100%',
    height: '200px',
    paddingTop: '100px'
  }
};

mqGiornaglieroAp = {
  type: 'kpi',
  properties: {
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [
        { 
          qDef: { 
            qDef: 'Ingressi/MQ Giornaliero a.p.',
            qLabel: '',
            numFormat: { 
              qType: 'U',
              qnDec: 0, // Number of decimals (change as needed)
              qUseThou: 0,
              qFmt: '###,##0.00', // Format the number as needed
              // Add the "qUseColors" property to specify the color
              qUseColors: 1,
              // Set the color to red
              qColor: {
                color: 255, // Red: 255, 0, 0 (R, G, B)
                index: -1
              }
            }
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 1, qHeight: 1 }],
    },
    showTitles: true,
    title: 'Ingressi/MQ Giornaliero a.p.',
    subtitle: '',

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

