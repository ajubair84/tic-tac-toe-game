const atlantaSearchPath = '/georgia/atlanta-apartments'

const bedFilters = browser => browser.page.large.bedFilters()
const moreFilters = browser => browser.page.large.moreFiltersModal()

module.exports = {
  tags: ['criticalPath', 'quarantineFirefox', 'stableChrome', 'stableIE', 'stableEdge', 'stableSafari', 'stableQA', 'stableProd', 'stableCD', 'stableLocal', 'stableHeadless'],
  before: browser => {
    browser.start({
      path: atlantaSearchPath,
    })
  },

  after: browser => {
    browser.customSauceEnd()
    browser.recordResultInTestrailLarge(234)
  },

  'Validate URL': browser => {
    browser.assert.urlEquals(`${browser.launchUrl}${atlantaSearchPath}`)
  },

  'Verify Bed Dropdown to be present': browser => {
    bedFilters(browser).waitForElementVisible('@beds')
    bedFilters(browser).expect.element('@beds').text.to.equal('Beds')
  },

  'Verify Bed selection': browser => {
    bedFilters(browser)
      .selectBed('@2beds')
      .waitForURLEquals(`${browser.launchUrl}${atlantaSearchPath}/2-bedroom`)
      .verifyBed('2 Beds')
  },

  'Verify Head Title Text after beds added from quick filters': browser => {
    browser.expect.element('title').attribute('text').to
      .match(/Atlanta, GA 2 Bedroom Apartments for Rent - \d+ Apartments [|] Rent.com®/)
  },

  'Verify quick filters reflected correctly in moreFilters modal': browser => {
    moreFilters(browser).open()
    moreFilters(browser).section.beds
      .waitForElementVisible('@beds3Bed')
      .click('@beds3Bed')
    moreFilters(browser)
      .waitForElementVisible('@showProperties')
      .submit()
    bedFilters(browser).verifyBed('3 Beds')
  },

  'Verify Head Title Text after beds added from moreFilters': browser => {
    browser.expect.element('title').attribute('text').to
      .match(/Atlanta, GA 3 Bedroom Apartments for Rent - \d+ Apartments [|] Rent.com®/)
  },

  'Verify bed buttons selection on moreFilters modal reflects in quick filters': browser => {
    // IE11 is timing out because of its show performance with drop-down and modals,
    // instead of quarantine the test on IE11. We are only going to check the critical
    // part of the test in IE11. Other browsers will still run the full test.
    if (browser.options.desiredCapabilities.browserName !== 'internet explorer') {
      moreFilters(browser).open()
      moreFilters(browser).section.beds
        .waitForElementVisible('@beds2Bed')
        .click('@beds2Bed')
      moreFilters(browser).submit()
      browser.assert.urlContains('2-bedroom')
      bedFilters(browser).verifyBed('2 Beds')
    }
  },

  'Verify preselected quick filters bed label changes after changing more filters beds': browser => {
    if (browser.options.desiredCapabilities.browserName !== 'internet explorer') {
      const bedSelection = '/4-bedroom'
      bedFilters(browser).selectBed('@4beds')
        .waitForURLEquals(`${browser.launchUrl}${atlantaSearchPath}${bedSelection}`)
      bedFilters(browser).verifyBed('4+ Beds')
      moreFilters(browser).open()
      moreFilters(browser).section.beds
        .waitForElementVisible('@beds3Bed')
        .click('@beds3Bed')
      moreFilters(browser)
        .waitForElementVisible('@showProperties')
        .submit()
      bedFilters(browser).verifyBed('3 Beds')
    }
  },

  'Verify preselected quick filters bed label changes to default after unselecting more filters beds': browser => {
    if (browser.options.desiredCapabilities.browserName !== 'internet explorer') {
      const bedSelection = '/2-bedroom'
      bedFilters(browser).selectBed('@2beds')
        .waitForURLEquals(`${browser.launchUrl}${atlantaSearchPath}${bedSelection}`)
      bedFilters(browser).expect.element('@beds').text.to.equal('2 Beds')
      moreFilters(browser).open()
      moreFilters(browser).section.beds
        .waitForElementVisible('@beds2Bed')
        .click('@beds2Bed')
      moreFilters(browser)
        .waitForElementVisible('@showProperties')
        .submit()
      bedFilters(browser).verifyBed('Beds')
    }
  },
}
