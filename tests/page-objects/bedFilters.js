/* eslint object-shorthand: "off" */

const sections = {
  beds: {
    selector: '[data-tag_item="filters_bedrooms"]',
    elements: {
      any: '[data-tag_selection="any"]',
      '1bed': '[data-tag_selection="1bed"]',
      '2beds': '[data-tag_selection="2beds"]',
      '3beds': '[data-tag_selection="3beds"]',
      '4beds': '[data-tag_selection="4beds"]',
      '0beds': '[data-tag_selection="0beds"]',
    },
  },
}

const commands = [{
  /**
   * Select bed from filters dropdown
   * @param {string} bed
   */
  selectBed: function(bed) {
    const beds = this.section.beds
    const { selector } = beds
    beds
      .waitForElementVisible(selector)
      .click(selector)
      .waitForElementVisible(bed)
      .click(bed)
    return this
  },

  /**
   * Verfiy bed selection from filters dropdown
   * @param {string} bed
   */
  verifyBed: function(bed) {
    const beds = this.section.beds
    const { selector } = beds
    beds
      .waitForElementVisible(selector)
      .expect.element(selector).text.to.equal(bed)
    return this
  },
}]

module.exports = {
  elements: {
    beds: '[data-tag_item="filters_bedrooms"]',
  },
  sections,
  commands,
}
