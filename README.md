# tic-tac-toe-game Bugs:
- https://docs.google.com/document/d/1u1dodg37f1GTAxMseS0MNsWLNxBpqqRUZxw5NuPjtw0/edit

# Team to start writing automation tests
- https://docs.google.com/document/d/1qO01euI6mZovNV2Zw1dwyZk5qT9aLvuTAgjiG2wpVCA/edit

# Youtube Video Link (Overview of Automation Framework and Tests Using Nightwatch.js)
- https://youtu.be/bIR012aRThY


  "test_settings": {
    "default": {
      "globals": {
        "waitForConditionTimeout": 30000,
        "waitForConditionPollInterval": 100
      },
      "launch_url": "${LAUNCH_URL}",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "webdriver.username": "${SAUCE_USERNAME}",
      "webdriver.access_key": "${SAUCE_ACCESS_KEY}",
      "desiredCapabilities": {
        "autoAcceptAlerts": true,
        "browserName": "Browser",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "avoidProxy": true,
        "build": "Build: ${BUILD_NUMBER} Branch: ${BRANCH_NAME} - ${TYPE}"
      }
    },
