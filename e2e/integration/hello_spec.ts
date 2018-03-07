/// <reference types="Cypress" />

describe('Hello Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should vary exclamation marks on "+" button click and "-" button click', () => {
    cy.get('.greeting').should('have.text', 'Hello Mock!');
    
    cy.get('#increment-button').click();

    cy.get('.greeting').should('have.text', 'Hello Mock!!');

    cy.get('#decrement-button').click();

    cy.get('.greeting').should('have.text', 'Hello Mock!');
  });
});