let locator = require('../locator/locators')

export class EnterWithUsernamePage {
    enterEmailOrNumberPhone(emailOrPhoneNumber) {
        cy.get(locator.ENTER_WITH_USERNAME_PAGE.enter_email_or_phone_number_input)
            .contains('آدرس ایمیل یا شماره موبایل')
            .type(emailOrPhoneNumber)
    }

    enterPassword(password) {
        cy.get(locator.ENTER_WITH_USERNAME_PAGE.enter_email_or_phone_number_input)
            .contains('کلمه عبور').type(password)
    }

    clickEnterAlibabaBtn() {
        cy.get(locator.ENTER_WITH_USERNAME_PAGE.enter_alibaba_button).contains(' ورود به علی‌بابا ')
            .click()
    }

    verifyCorrectLogin(username){
        cy.contains(username).should('have.text', username)
    }
}