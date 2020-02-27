  const basePath = 'https://codepen.io'
  const gamePagePath = '/jshlfts32/full/bjambP'
  const header = browser => browser.page.header()
  const login = browser => browser.page.logIn()
  const email = 'test_account-009@test.com'
  const password = '123456!'

  module.exports = {
    tags: ['regression'],
    before: browser => {
      browser.url(`${basePath}${gamePagePath}`)
    },
  
    after: browser => {
      browser.end()
    },
  
    'Validate URL': browser => {
      browser.assert.urlEquals(`${basePath}${gamePagePath}`)
    },
  
    'Click Login Button and Verify Page Header': browser => {
      header(browser)        
        .waitForElementVisible('@loginButton')
        .click('@loginButton')
      login(browser)
        .waitForElementVisible('@loginHeader')
        .expect.element('@loginHeader').text.to.equals('Log In!')
    },
  
    'Verify login page URL': browser => {
      const loginPath = '/login'
      browser
      .assert.urlEquals(`${basePath}${loginPath}`)
    },

    'Login With a valid account': browser => {
      login(browser)
        .waitForElementVisible('@emailInput')
        .setValue('@emailInput', email)
        .setValue('@passwordInput', password)
        .click('@loginButton')
    },

    'Verify it redirects after login to game page': browser => {
      header(browser)
        .assert.urlEquals(`${basePath}${gamePagePath}`)
        .waitForElementVisible('@pageTitleH1', 9000)
        .expect.element('@pageTitleH1').text.to.equals('Broken (on purpose) Tic Tac Toe')
      },
  }