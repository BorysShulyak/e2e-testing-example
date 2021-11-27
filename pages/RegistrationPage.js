import { BasePage } from './BasePage'

class RegistrationPage extends BasePage {
  static RegistrationPageUrl = ''

  get fullRegisterButton () {
    return $(`//*[text()='Full Register']`)
  }

  get continueButton () {
    return $('//button/span[text()=" Continue "]') // desktop
  }

  get completeButton () {
    return $('//*[@type="submit"]')
  }

  get registerButton () {
    return $('//div/button[@type="submit"]')
  }

  get modalWindow () {
    return $('//*[@role="presentation"]')
  }

  notificationOfElement (element) {
    return $(`${element.selector}/../../p`)
  }
  //===================================================================================
  get genderDropDown () {
    return $('//label/[text()="Gender"]/following-sibling::select')
  }

  getGenderOptions () {
    return $$(`${this.genderDropDown.selector}/option`)
  }

  get firstNameField () {
    return $('//*[@placeholder="First Name"]')
  }

  get lastNameField () {
    return $('//*[@placeholder="Last Name"]')
  }

  get phoneField () {
    return $('//*[@formcontrolname="Mobile Number"]')
  }

  get yearDropDown () {
    return $(`${this.monthDropDown.selector}/preceding-sibling::select`)
  }

  get monthDropDown () {
    return $('//select[@id="birth-month"]')
  }

  get dayDropDown () {
    return $(`${this.monthDropDown.selector}/following-sibling::select`)
  }
  //===================================================================================
  get countryDropDown () {
    return $('//label[text()="Country"]/following-sibling::*/select[1]')
  }

  get cityDropDown () {
    return $('//label[text()="Country"]/following-sibling::*/select[2]')
  }

  get addressField () {
    return $('//*[@placeholder="Address"]')
  }

  get documentNumberField () {
    return $('//*[@placeholder="Document number"]')
  }
  //===================================================================================
  get userNameField () {
    return $('//*[@placeholder="User Name"]')
  }

  get emailField () {
    return $('//*[@placeholder="Email"]')
  }

  get currencyDropDown () {
    return $('//label[text()="Currency"]/following-sibling::select')
  }

  get passwordField () {
    return $('//*[@placeholder="Password"]')
  }

  get confirmPasswordField () {
    return $('//*[@formcontrolname="confirmPassword"]')
  }

  get termsAndConditionsCheckbox () {
    return $('(//*[@type="checkbox"])[1]')
  }

  get privacyPolicyCheckbox () {
    return $('(//*[@type="checkbox"])[2]')
  }
  //===================================================================================

  // ======= commands ========

  fillFirstRegistrationStep (genderNumber, firstName, lastName, phone, date) {
    this.selectGender(genderNumber)
    this.typeIn(this.firstNameField, firstName)
    this.typeIn(this.lastNameField, lastName)
    this.typeIn(this.phoneField, phone)
    this.setBirthdayDate(date)
  }

  fillSecondRegistrationStep (countryCode, cityCode, address, documentNumber) {
    this.selectCountry(countryCode)
    this.selectCity(cityCode)
    this.typeIn(this.addressField, address)
    this.typeIn(this.documentNumberField, documentNumber)
  }

  fillThirdRegistrationStep (userName, email, currency, password ) {
    registrationPage.typeIn(registrationPage.userNameField, userName)
    registrationPage.typeIn(registrationPage.emailField, email)
    this.currencyDropDown.selectByVisibleText(currency)
    registrationPage.typeIn(registrationPage.passwordField, password)
    registrationPage.typeIn(registrationPage.confirmPasswordField, password)
  }

  clickContinueButton () {
    this.continueButton.waitForClickable()
    this.clickOn(this.continueButton)
  }

  selectGender (gender) {
    this.genderDropDown.selectByAttribute('value', gender)
  }

  selectCountry (country) {
    this.countryDropDown.selectByAttribute('value', country)
  }

  selectCity (city) {
    $('//label[text()="Country"]/following-sibling::*/select[2]/option[2]').waitForExist()
    this.cityDropDown.selectByAttribute('value', city)
  }

  setBirthdayDate (date) {
    const dateArray = date.split('-')
    this.yearDropDown.selectByAttribute('value', dateArray[0])
    this.monthDropDown.selectByAttribute('value', dateArray[1])
    this.dayDropDown.selectByAttribute('value', dateArray[2])
  }

  clickRegisterButton () {
    this.clickOn(this.registerButton)
  }
}

export const registrationPage = new RegistrationPage()
