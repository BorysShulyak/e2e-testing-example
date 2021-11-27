export default class Page {
    typeIn (element, text, timeMilliSec = 5000) {
        element.waitForDisplayed({ timeout: timeMilliSec })
        element.addValue(text)
    }

    clearAndTypeIn (element, text, timeMilliSec = 5000) {
        element.waitForDisplayed(timeMilliSec)
        element.clearValue()
        element.addValue(text)
    }

    clickOn (element, timeMilliSec = 7000) {
        element.waitForDisplayed({ timeout: timeMilliSec })
        element.click()
    }

    getText (element) {
        return element.getText()
    }

    getElementByText (text) {
        return $(`//*[text()="${text}"]`)
    }

    waitForUrl (value, timeout = 5000) {
        if (typeof value !== 'string') throw new Error('Expected "value" type string')
        let url, isMatch

        try {
            return browser.waitUntil(
              () => {
                  url = browser.getUrl()
                  isMatch = value === url
                  return value && isMatch
              },
              { timeout }
            )
        } catch (error) {
            throw new Error(`\n\tActual: ${url} \n\tExpected: ${value}`)
        }
    }
}
