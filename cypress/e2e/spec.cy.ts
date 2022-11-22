describe('Homepage', () => {
  it('must be accessible', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
