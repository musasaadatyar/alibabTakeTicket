import {LoginPage} from "../projectFile/classPage/loginPage";
import {EnterWithUsernamePage} from "../projectFile/enterWithUserNamePage/enterWithUserNamePage";
import {HomePage} from "../projectFile/homePage/homePage";
import {TravelListTicketPage} from "../projectFile/travelListTicketPage/travelListTicketPage";

let login = new LoginPage()
let enterWithUsernamePage = new EnterWithUsernamePage()
let home = new HomePage()
let travelListTicketPage = new TravelListTicketPage()

describe('page alibaba', function () {

    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.get('body');
        cy.viewport(window.screen.width, window.screen.height);
        cy.visit('https://www.alibaba.ir/')
    })

    it.only('travel with train in  ... date', () => {
        home.clickTravelType('اتوبوس')
        home.fillStartPlace('قم')
        home.fillEndPlace('تهران')
        home.fillDateTravel(14)
        home.clickSearchBtn()
    })


    it.only('chose ticket', () => {
        home.loadComplete()
        travelListTicketPage.clickOnByTicket()
    });


    it('login in the page', function () {
        cy.document().its('readyState').should('eq', 'complete').as('loadComplete')
        login.clickLoginHomeBtn()
        login.clickEnterWithPassword()
        cy.contains('ورود با کلمه عبور').should('have.exist')
        enterWithUsernamePage.enterEmailOrNumberPhone('09919700252')
        enterWithUsernamePage.enterPassword('pirgar704')
        enterWithUsernamePage.clickEnterAlibabaBtn()
        enterWithUsernamePage.verifyCorrectLogin('09919700252')
    })


})
