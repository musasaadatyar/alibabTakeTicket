let locator = require('../locator/locators')
import moment from 'jalali-moment'

export class HomePage {
    clickTravelType(typeTravel) {
        return cy.get(locator.HomePage.click_travel_type_button)
            .contains(typeTravel)
            .should('exist')
            .click()
    }

    fillStartPlace(startPlace) {
        return cy.get(locator.HomePage.label)
            .contains('مبدا')
            .click().type(startPlace)
            .should('exist')
            .get(locator.globalSelector.link_place)
            .contains(startPlace).click()
    }

    fillEndPlace(endPlace) {
        return cy.get(locator.HomePage.label)
            .contains('مقصد')
            .click().type(endPlace)
            .should('exist')
            .get(locator.globalSelector.link_place)
            .contains(endPlace).should('be.visible').click()
    }

    getDay() {
        const currentDate = new Date()
        const jalaliDate = moment(currentDate).locale('fa').format('jYYYY/jMM/jDD');
        return parseInt(jalaliDate.split('/')[2])
    }

    fillDateTravel(dayTravel) {
        if (this.getDay() > dayTravel) {
            cy.contains(this.getDay()).parent('.is-today').should('have.class', 'is-today')
            return cy.get(locator.HomePage.datepicker_card).contains(this.getDay()).click()

        }  if (this.getDay() <= dayTravel) {
            return cy.get(locator.HomePage.datepicker_card).contains(dayTravel).click()
        }
    }

    clickSearchBtn() {
        return cy.get(locator.HomePage.ticket_search_btn).contains('جستجو').click()
    }

    loadComplete() {
        return cy.document().its('readyState').should('eq', 'complete')
    }
}