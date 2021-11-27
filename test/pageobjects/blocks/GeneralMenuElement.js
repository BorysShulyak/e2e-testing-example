import { BasePage } from '../BasePage'

class GeneralMenuElement extends BasePage {
  get mainSelector () {
    return $('//*[@class="timezone"]/span[not(@class)]')
  }

  get time () {
    const el = '//*[@class="timezone"]/span[not(@class)]'
    return this.mainSelector.$(el)
  }

  get gmt () {
    const el = '//*[@class="timezone"]/span[last()]'
    return this.mainSelector.$(el)
  }

  // ======= commands ========

  getTime () {
    return this.getText(this.time)
  }

  getGMT () {
    const text = this.getText(this.gmt).match(/\d+/g)
    return text[0]
  }
}

export const generalMenuElement = new GeneralMenuElement()
