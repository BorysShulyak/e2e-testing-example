import { homePage } from '../pages/HomePage'

class CommonAssertions {
  checkUserLoggedInWithName (firstName) {
    expect(homePage.$userNameLabel).toHaveTextContaining(firstName.slice(1, firstName.length))
  }
}

export const commonAssertions = new CommonAssertions()
