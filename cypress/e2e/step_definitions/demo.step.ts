const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on cypress examples page', () => {
  cy.visit('https://example.cypress.io');
});

When('I click {string} link', (linkText: string) => {
  cy.contains('a', linkText).click({ force: true });
});

Then('I should see the {string} page', (pageName: string) => {
  cy.location()
    .its('pathname')
    .should('equal', `/commands/${pageName.toLowerCase()}`);

  cy.get('h1', { timeout: 100 }).should('have.text', pageName);
});
