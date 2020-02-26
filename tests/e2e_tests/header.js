  const urlPath = 'https://codepen.io/jshlfts32/full/bjambP'
  
  module.exports = {
    before: browser => {
      tags: ['regression'],
      browser.url(urlPath)
    },
  
    after: browser => {
      browser.end()
    },
  
    'Validate Game Page URL': browser => {
      browser.assert.urlEquals(urlPath)
    },
  
    'Verify the Logo and page title are visible and text Equals': browser => {
      browser.page.header()
        .waitForElementVisible('@logo')
        .waitForElementVisible('@pageTitleH1')
        .expect.element('@pageTitleH1').text.to.equals('Broken (on purpose) Tic Tac Toe')
    },
  
    'Verify header icons are visible': browser => {
      const header = browser.page.header()
      header.expect.element('@heartButton').to.be.visible.before(3000)
      header.expect.element('@viewSwitchButton').to.be.visible.before(3000)
      header.expect.element('@signUpButton').to.be.visible.before(3000)
      header.expect.element('@loginButton').to.be.visible.before(3000)
    },
  }