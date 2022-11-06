describe('Simple navigation spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  });

  it('should dave correct header', () => {
    cy.h1().eq(0).should('have.text', 'Kitchen Sink');
  });
});