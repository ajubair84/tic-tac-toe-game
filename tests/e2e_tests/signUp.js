  const constants = require('../constants.js')
  const signUp = browser => browser.page.signUp()

  const basePath = 'https://codepen.io'
  const gamePagePath = '/jshlfts32/full/bjambP'
  const signupPath = '/accounts/signup/user/free'


  module.exports = {
    tags: ['regression'],
    before: browser => {
      browser.url(`${basePath}${gamePagePath}`)
    },
  
    after: browser => {
      browser.end()
    },
  
    'Validate game page URL': browser => {
      browser.assert.urlEquals(`${basePath}${gamePagePath}`)
    },
  
    'Click SignUp Button from the Header': browser => {
      browser.page.header()        
        .waitForElementVisible('@signUpButton')
        .click('@signUpButton')
    },

    'Verify signup page URL and H1 Title': browser => {
      signUp(browser)
        .assert.urlEquals(`${basePath}${signupPath}`)       
        .waitForElementVisible('@PageH1')
        .expect.element('@PageH1').text.to.equals('Free')
    },
  
    'Open registration form': browser => {
      signUp(browser)       
        .waitForElementVisible('@signUpWithEmailButton')
        .click('@signUpWithEmailButton')
        .waitForElementVisible('@yourNameInput')
    },

    'Fill out registration form': browser => {
      // importing email registration information from constants
      signUp(browser)
        .setValue('@yourNameInput', constants.yourName)
        .setValue('@userNameInput', constants.userName)
        .setValue('@emailInput', constants.email)
        .setValue('@passwordInput', constants.password)
    },

    'Submit registration form': browser => {
      signUp(browser)
        .click('@submitButton')
    },
  }