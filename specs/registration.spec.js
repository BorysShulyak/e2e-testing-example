import { registrationPage } from '../pages/RegistrationPage'
import { mainPage } from '../pages/MainPage'
import { getRandomNumber } from '../utils/helper'
import { commonAssertions } from '../assertions/Common.assertions'

describe('Registration', () => {
  const testUser = {
    ganderNumber: '1',
    firstName: 'John',
    lastname: 'Smith',
    phone:  getRandomNumber(),
    birthdate: '2000-11-11',
    countryCode: '796',
    cityCode: '1: 1467',
    address: 'Pushkina str 12',
    documentNumber: getRandomNumber(),
    userName: `testUserName${getRandomNumber()}`,
    email: `${getRandomNumber()}@regmail.com`,
    currency: 'USD',
    password: '12345a',
  }

  beforeEach(() => {
    browser.url(browser.config.baseUrl)
    mainPage.openRegistration()
  })

  // afterEach(() => {
  //   browser.reloadSession();
  // });

  it('should check registration in portal', () => {
    if (registrationPage.fullRegisterButton) registrationPage.fullRegisterButton.click()

    expect(registrationPage.continueButton).not.toBeClickable()
    registrationPage.fillFirstRegistrationStep(
      testUser.ganderNumber,
      testUser.firstName,
      testUser.lastname,
      testUser.phone,
      testUser.birthdate
    )
    registrationPage.clickContinueButton()

    expect(registrationPage.firstNameField).toBeDisplayed()
    expect(registrationPage.continueButton).not.toBeClickable()
    registrationPage.fillSecondRegistrationStep(
      testUser.countryCode,
      testUser.cityCode,
      testUser.address,
      testUser.documentNumber
    )
    registrationPage.clickContinueButton()
    registrationPage.continueButton.waitForDisplayed({ reverse: true })

    registrationPage.fillThirdRegistrationStep(
      testUser.userName,
      testUser.email,
      testUser.currency,
      testUser.password
    )
    registrationPage.termsAndConditionsCheckbox.click()
    registrationPage.privacyPolicyCheckbox.click()
    registrationPage.clickRegisterButton()

    // Check user logged in
    registrationPage.registerButton.waitForDisplayed({ reverse: true, timeout: 10000 })
    commonAssertions.checkUserLoggedInWithName(testUser.firstName)
  })
})
