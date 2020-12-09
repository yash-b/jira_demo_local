// CPSC 542 - Software Validation and Verification
// Prof. David Heckathorn
// Yash Bhambhani, Nicole Traboulsi
// Dec 02, 2020

import { testid } from '../support/utils';

describe('Authentication', () => {
  beforeEach(() => {
    cy.resetDatabase();
    cy.visit('/');
  });

  it('creates guest account if user has no auth token', () => {
    cy.window()
      .its('localStorage.authToken')
      .should('be.undefined');

    cy.window()
      .its('localStorage.authToken')
      .should('be.a', 'string')
      .and('not.be.empty');

    cy.get(testid`list-issue`).should('have.length', 8);
  });
});
