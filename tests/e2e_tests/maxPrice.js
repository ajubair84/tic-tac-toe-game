const atlantaSearchPath = '/georgia/atlanta-apartments'

module.exports = {
  // will investigate to make the test more stable https://rentpath.atlassian.net/browse/RJS-258
  tags: ['criticalPath', 'quarantineFirefox', 'stableChrome', 'quarantineIE', 'stableEdge', 'quarantineSafari', 'stableQA', 'stableProd', 'stableCD', 'stableLocal', 'stableHeadless'],
  before: browser => {
    browser.start({
      path: atlantaSearchPath,
    })
  },

  after: browser => {
    browser.customSauceEnd()
    browser.recordResultInTestrailLarge(236)
  },

  'Validate URL': browser => {
    browser.assert.urlEquals(`${browser.launchUrl}${atlantaSearchPath}`)
  },

  'Verify Max Price Dropdown to be present': browser => {
    browser.page.large.priceFilters().verifyMaxPrice('Max Price')
  },

  'Verify Scroll on max price list  ': browser => {
    const priceFilters = browser.page.large.priceFilters()
    const maxPriceSelection = '/max-price-5000'
    priceFilters
      .selectMaxPrice('@$5000')
      .waitForURLEquals(`${browser.launchUrl}${atlantaSearchPath}${maxPriceSelection}`)
      .verifyMaxPrice('$5,000')
    browser.url(`${browser.launchUrl}${atlantaSearchPath}`)
  },

  'Open the more filters modal': browser => {
    browser.page.large.moreFiltersModal().open()
  },

  'Verify quick filters max price label changes after applying more filters max price': browser => {
    const priceFilters = browser.page.large.priceFilters()
    const priceInput = browser.page.large.moreFiltersModal().section.priceInput

    priceInput.expect.element('@priceInputMaxLabel').text.to.equal('$5,100+').before(6000)

    priceInput.moveToElement('@priceInputMaxHandle', 5, 5)
    browser.mouseButtonDown(0)
    priceInput.moveToElement('@priceInputMaxHandle', -200, 5)
    browser.mouseButtonUp(0)

    // Testing environments might be slightly different so we can't test for an exact number
    priceInput.expect.element('@priceInputMaxLabel').text.to.match(/\$3,\d\d\d/).before(6000)
    browser.page.large.moreFiltersModal()
      .waitForElementVisible('@showProperties')
      .submit()
    priceFilters.verifyMaxPrice(/\$3,\d\d\d/)
  },

  'Verify quick filters max price changes do not affect more filters min price': browser => {
    const priceFilters = browser.page.large.priceFilters()
    const priceInput = browser.page.large.moreFiltersModal().section.priceInput
    const maxPriceSelection = '/max-price-3000'
    priceFilters
      .selectMaxPrice('@$3000')
      .waitForURLEquals(`${browser.launchUrl}${atlantaSearchPath}${maxPriceSelection}`)
      .verifyMaxPrice('$3,000')
    const moreFilters = browser.page.large.moreFiltersModal()
    moreFilters.open()
    priceInput.expect.element('@priceInputMinLabel').text.to.equal('$0').before(6000)
    priceInput.expect.element('@priceInputMaxLabel').text.to.equal('$3,000').before(6000)
    browser.url(`${browser.launchUrl}${atlantaSearchPath}`)
  },
}
