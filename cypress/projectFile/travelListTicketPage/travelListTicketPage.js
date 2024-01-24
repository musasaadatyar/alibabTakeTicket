import locator from '../locator/locators';

export class TravelListTicketPage {
    routTicketPage() {
        cy.get('.loader')
            .should('not.exist')
        return cy.contains('نتایج: ').should('be.visible')
    }

    availableCardContent() {
        return cy.get('div[class="available-card__content"]').should('be.visible').then((numberTicket) => {
            let ticketCount = numberTicket.length;
            return ticketCount > 0;
        })
    }

    notAvailableCardContent() {
        return cy.get('.my-0 > .text-grays-600').should('have.text', 0)
            .invoke('text')
            .then((text) => {
            return text === 0; // اگر مقدار متن برابر با '0' باشد، مقدار true را برگردان
        })
    }

    clickOnByTicket() {
        return cy.request('https://y.clarity.ms/collect').then((url) => {
            if (200 <= url.status <= 210) {
                cy.log('1111111111111111111',this.notAvailableCardContent(),'11111111111111111');
                if (!this.notAvailableCardContent()) {
                    cy.log('222222222222222222222222')
                    setTimeout(() => {
                        this.clickOnByTicket(); // تست را دوباره اجرا کنید
                    }, 10000);
                }

                // if (this.availableCardContent() && this.choseTicket()) {
                //     cy.log('11111111111111111111111111')
                //     cy.contains(' انتخاب بلیط ').click()
                //     this.choseTicket()
                // }
            }
        })
    }

    choseTicket() {
        return cy.contains(' انتخاب بلیط ').should('have.lengthOf.above', 0)
    }

}