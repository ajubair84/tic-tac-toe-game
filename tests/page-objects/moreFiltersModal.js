const priceInputLabelXpath = '//*[@data-tid="priceinput-label"]'
const priceInputHandleXpath = '//*[@data-tid="price-input"]//*[@role="slider"]'

const moreFiltersCommands = {
  open() {
    this
    .waitForElementVisible('@open')
    .click('@open')
    .waitForElementVisible('@close', 9000)
  },

  submit() {
    this.waitForElementVisible('@showProperties')
      .click('@showProperties')
      .waitForElementVisible('@open')
  },

  close() {
    this.click('@close')
      .waitForElementVisible('@open')
  },

  cancel() {
    this.click('@cancel')
      .waitForElementVisible('@open')
  },
}

module.exports = {
  elements: {
    open: '[data-tid=more-filters]',
    modal: '[data-tid=more-filters-modal]',
    propCount: '[data-tid=more-filters-props-count]',
    close: '[data-tid=more-filters-close]',
    resetAll: '[data-tid=more-filters-reset-all]',
    cancel: '[data-tid=more-filters-cancel]',
    showProperties: '[data-tid=more-filters-show-props]',
    showPropertiesLink: '[data-tid=more-filters-submit-link]',
    bedsSectionText: '[data-tid=bed-input] h3',
  },
  sections: {
    priceInput: {
      selector: '[data-tid=price-input]',
      elements: {
        header: 'h3',
        priceInputMinHandle: {
          selector: `(${priceInputHandleXpath})[1]`,
          locateStrategy: 'xpath',
        },
        priceInputMaxHandle: {
          selector: `(${priceInputHandleXpath})[2]`,
          locateStrategy: 'xpath',
        },
        priceInputMinLabel: {
          // Note there are actually 4 price labels, but the two at the ends
          // are hidden so we want the second and third labels.
          selector: `(${priceInputLabelXpath})[2]`,
          locateStrategy: 'xpath',
        },
        priceInputMaxLabel: {
          selector: `(${priceInputLabelXpath})[3]`,
          locateStrategy: 'xpath',
        },
        priceInputGrid: '[data-tid=priceinput-grid]',
        grid1: '[data-tid=priceinput-grid-item]:nth-child(1)',
        grid2: '[data-tid=priceinput-grid-item]:nth-child(2)',
        grid3: '[data-tid=priceinput-grid-item]:nth-child(3)',
        grid4: '[data-tid=priceinput-grid-item]:nth-child(4)',
        grid5: '[data-tid=priceinput-grid-item]:nth-child(5)',
        grid6: '[data-tid=priceinput-grid-item]:nth-child(6)',
      },
    },
    beds: {
      selector: '[data-tid=bed-input]',
      elements: {
        header: 'h3',
        bedsStudio: '[data-tid=bed-buttons] div:nth-child(1)',
        beds1Bed: '[data-tid=bed-buttons] div:nth-child(2)',
        beds2Bed: '[data-tid=bed-buttons] div:nth-child(3)',
        beds3Bed: '[data-tid=bed-buttons] div:nth-child(4)',
        beds4Bed: '[data-tid=bed-buttons] div:nth-child(5)',
      },
    },
    baths: {
      selector: '[data-tid=bath-input]',
      elements: {
        header: 'h3',
        baths1: '[data-tid=bath-buttons] div:nth-child(1)',
        baths2: '[data-tid=bath-buttons] div:nth-child(2)',
        baths3: '[data-tid=bath-buttons] div:nth-child(3)',
      },
    },
    tours: {
      selector: '[data-tid="tours-input"]',
      elements: {
        header: 'h3',
        newBadge: 'h3 > span',
        stayAtHomeTours: '[data-tid="virtualTours"]',
      },
    },
    pets: {
      selector: '[data-tid=pet-input]',
      elements: {
        header: 'h3',
        cats: '[data-tid=pet-buttons] div:nth-child(1)',
        dogs: '[data-tid=pet-buttons] div:nth-child(2)',
        catsDogs: '[data-tid=pet-buttons] div:nth-child(3)',
        noPets: '[data-tid=pet-buttons] div:nth-child(4)',
      },
    },
    amenities: {
      selector: '[data-tid=amenities-input]',
      elements: {
        header: 'h3',
        airConditioning: '[data-tid=airConditioning]',
        patio: '[data-tid=patio]',
        cableReady: '[data-tid=cableReady]',
        controlledLimitedAccess: '[data-tid=controlledLimitedAccess]',
        dishwasher: '[data-tid=dishwasher]',
        elevator: '[data-tid=elevator]',
        extraStorage: '[data-tid=extraStorage]',
        disabilityAccess: '[data-tid=disabilityAccess]',
        hardwoodFloor: '[data-tid=hardwoodFloor]',
        laundryFacility: '[data-tid=laundryFacility]',
        onsitePersonnel: '[data-tid=onsitePersonnel]',
        pool: '[data-tid=pool]',
        fitnessCenter: '[data-tid=fitnessCenter]',
        someUtilitiesCovered: '[data-tid=someUtilitiesCovered]',
        walkInClosets: '[data-tid=walkInClosets]',
        washerDryerConnections: '[data-tid=washerDryerConnections]',
        washerDryerInUnit: '[data-tid=washerDryerInUnit]',
        incomeRestricted: '[data-tid=incomeRestricted]',
        seniorLiving: '[data-tid=seniorLiving]',
      },
    },
    propertyTypes: {
      selector: '[data-tid=property-type-input]',
      elements: {
        header: 'h3',
        apartments: '[data-tid=apartments]',
        townhouses: '[data-tid=townhouses]',
        condos: '[data-tid=condos]',
        houses: '[data-tid=houses]',
      },
    },
  },
  commands: [moreFiltersCommands],
}
