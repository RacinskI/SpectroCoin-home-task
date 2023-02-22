import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import rgbHex from "rgb-hex";

Given('customer is in the live rates page', function () {
    cy.visit('/');
});

When('customer selects {string} as reference currency from the list', function (currency) {
    cy.get('[id="currency-select"]').click();
    cy.get('[id^="react-select-currency-select-option-"]').contains(currency).click();
});

When('customer select {string} currency rate', function (currency) {
    cy.selectCurrency(currency)
        .then((value) => {
            this.rateValue = value.text();
        })
});

Then('selected currency rate is positive', function () {
    expect(this.rateValue.startsWith('+')).to.be.true;
});

Then('field color is green for {string} currency', function (currency) {
    cy.selectCurrency(currency)
        .invoke('css', 'color').then((bgColor) => {
        expect(rgbHex(bgColor)).to.eq('53c789')
    })
});