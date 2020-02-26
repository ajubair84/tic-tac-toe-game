module.exports = {
    elements: {
        inputText: {
            selector: "(//input[@id='number'])",
            locateStrategy: 'xpath',
        },
        playButton: {
            selector:'(//*[@id="start"])',
            locateStrategy: 'xpath',
        },
        gameTable: '#table',
    }
}