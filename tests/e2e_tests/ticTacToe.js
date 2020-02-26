  const urlPath = 'https://codepen.io/jshlfts32/full/bjambP'
  const game = browser => browser.page.game()

  module.exports = {
    tags: ['quarantineregression', 'quarantinecriticalPath'],
    before: browser => {
      browser.url(urlPath)
    },
  
    after: browser => {
      browser.end()
    },
  
    'Validate URL': browser => {
      browser.assert.urlEquals(urlPath)
    },
  
    'Enter 3 on the Textbox and Click Play Button': browser => {
      game(browser)
        .waitForElementVisible('@inputText')
        .setValue('@inputText', '3')
        .click('@playButton')
    },
  
    'Verify Tic Tac Toe Table is visible': browser => {
      game(browser).expect.element('@gameTable')
    },
  }