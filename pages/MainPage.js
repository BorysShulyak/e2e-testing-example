import { BasePage } from './BasePage'

class MainPage extends BasePage {
  get $registrationButton () {
    return $('//*[@type="submit"]')
  }

  // ======= commands ========

  openRegistration () {
    this.clickOn(this.$registrationButton)
  }
}

export const mainPage = new MainPage()
