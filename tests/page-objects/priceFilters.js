/* eslint object-shorthand: "off" */

const sections = {
  prices: {
    selector: '[data-tag_item="filters_max_price"]',
    elements: {
      Any: '[data-tag_selection="Any"]',
      $300: '[data-tag_selection="$300"]',
      $500: '[data-tag_selection="$500"]',
      $1000: '[data-tag_selection="$1000"]',
      $1500: '[data-tag_selection="$1500"]',
      $2000: '[data-tag_selection="$2000"]',
      $3000: '[data-tag_selection="$3000"]',
      $5000: '[data-tag_selection="$5000"]',
    },
  },
}

const commands = [{
  /**
   * Select price from filters price dropdown
   * @param {string} price
   */
  selectMaxPrice: function(price) {
    const prices = this.section.prices
    const { selector } = prices
    prices
      .waitForElementVisible(selector)
    prices
      .click(selector)
      .waitForElementVisible('@Any')
      .getLocationInView(price)
      .click(price)
    return this
  },

  /**
   * Verify price selection from filters dropdown
   * @param {*} price
   * Takes a string else Regex
   */
  verifyMaxPrice: function(price) {
    const prices = this.section.prices
    const { selector } = prices
    prices.waitForElementVisible(selector)
    return typeof price === 'string'
      ? prices.expect.element(selector).text.to.equal(price)
      : prices.expect.element(selector).text.to.match(price)
  },
}]

module.exports = {
  elements: {
    maxPrice: '[data-tag_item="filters_max_price"]',
  },
  sections,
  commands,
}
