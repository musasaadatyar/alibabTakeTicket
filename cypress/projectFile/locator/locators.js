const {TravelListTicketPage} = require("../travelListTicketPage/travelListTicketPage");
module.exports = {
    HomePage: {
        login_button: 'button',
        logo_image: 'img[alt="لوگوی علی بابا"]',
        click_travel_type_button: 'a[role="button"]',
        label: 'label',
        datepicker_card: '.datepicker-card',
        calender: '.calendar-grid',
        ticket_search_btn: 'button[type="button"]',


    },
    LOGIN_PAGE: {
        enter_with_password: 'button[type="button"]',
        input_phone_number: '#al201167'

    },
    ENTER_WITH_USERNAME_PAGE: {
        enter_email_or_phone_number_input: 'label',
        enter_password_input: 'label',
        enter_alibaba_button: 'button[type="submit"]'
    },
    TravelListTicketPage: {
        available_card_content: '.available-card__content',

    },
    globalSelector: {
        strong: 'strong',
        link_place: 'a[role="listitem"]',
        button: 'button[type="button"]',
        button2: 'button',
    }

}
