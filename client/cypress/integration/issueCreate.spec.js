// CPSC 542 - Software Validation and Verification
// Prof. David Heckathorn
// Yash Bhambhani, Nicole Traboulsi
// Dec 02, 2020

import { testid } from '../support/utils';

describe('Issue create', () => {
  beforeEach(() => {
    cy.resetDatabase();
    cy.createTestAccount();
    cy.visit('/project/settings?modal-issue-create=true');
  });

  it('validates form and creates issue successfully', () => {
    cy.get(testid`modal:issue-create`).within(() => {
      cy.get('button[type="submit"]').click();
      cy.get(testid`form-field:title`).should('contain', 'This field is required');

      cy.selectOption('type', 'Story');
      cy.get('input[name="title"]').type('TEST_TITLE');
      cy.get('.ql-editor').type('TEST_DESCRIPTION');
      cy.selectOption('reporterId', 'Nicole Traboulsi');
      cy.selectOption('userIds', 'Nicole Traboulsi', 'Yash Bhambhani');
      cy.selectOption('priority', 'High');

      cy.get('button[type="submit"]').click();
    });

    cy.get(testid`modal:issue-create`).should('not.exist');
    cy.contains('Issue has been successfully created.').should('exist');
    cy.location('pathname').should('equal', '/project/board');
    cy.location('search').should('be.empty');

    cy.contains(testid`list-issue`, 'TEST_TITLE')
      .should('have.descendants', testid`avatar:Nicole Traboulsi`)
      .and('have.descendants', testid`avatar:Yash Bhambhani`)
      .and('have.descendants', testid`icon:story`);
  });
});
