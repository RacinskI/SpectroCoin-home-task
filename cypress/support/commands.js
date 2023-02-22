
Cypress.Commands.add('selectCurrency', (currency) => {
    cy.get('[data-cy="rates"] > tbody > tr > td')
        .contains('div > :nth-child(2)', currency)
        .parents('[data-cy="rates"] > tbody > tr')
        .children().eq(2)
})