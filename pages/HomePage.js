import { BasePage } from './BasePage'

class HomePage extends BasePage {
  get $logoutButton () {
    return $('//*[@data-icon="sign-out-alt"] | //*[@type="button"]')
  }

  get settingsButton () {
    return $('//*[contains(text(),"Settings")] | //*[text()="Settings"]')
  }

  get $userNameLabel () {
    return $('//*[@id="user_panel_title"] | //div[@class="info-block"][1]/span')
  }

  get $userIcon () {
    return $( '//*[@data-icon="user"]')
  }

  get yesInfoModalButton () {
    return $('//*[@class="modal-content Login_Info"]//button')
  }

  get select () {
    return $('//*[@class="modal-content Login_Info"]//button')
  }

  get navBar () {
    return $('.header-section__group2')
  }

  // ======= commands ========

  clickLogOut () {
    this.$logoutButton.waitForClickable()
    this.clickOn(this.$logoutButton)
  }

  openDropDownMenu () {
    this.$userIcon.waitForClickable({ timeout: 4000 })
    this.$userIcon.waitForDisplayed({ timeout: 2000 })
    this.clickOn(this.$userIcon)
  }

  logOut () {
    this.openDropDownMenu()
    this.clickLogOut()
  }

  closeLoginInfoModal () {
    this.clickOn(this.yesInfoModalButton)
    this.yesInfoModalButton.waitForDisplayed({ reverse: true })
  }

  clickSettings () {
    this.settingsButton.waitForClickable()
    this.clickOn(this.settingsButton)
  }
}

export const homePage = new HomePage()
