let locator = require('../locator/locators');
export  class LoginPage{
    visitHomePage(){
        cy.visit('https://www.alibaba.ir/')
    }
    clickLoginHomeBtn(){
        return  cy.get(locator.HomePage.login_button).contains(' ورود یا ثبت‌نام ').click()
    }

    clickEnterWithPassword(){
        return cy.get(locator.LOGIN_PAGE.enter_with_password).contains(' ورود با کلمه عبور ').click()
    }
     enterPhoneNumberLoginPage(phoneNumber){
        return cy.get(locator.LOGIN_PAGE.enter_with_password).clear().type(phoneNumber)
     }

}