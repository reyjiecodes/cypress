/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';


Then(/^I should be on "([^"]*)" page$/, (page:string)=>{
  cy.fixture(`/element-pattern/${page.replace(/\s+/g, '')}.json`).then((selector)=>{
    const extension:string = selector.urlExtension;
    cy.url().should(`include`, extension );
  });
});

Then(/^I should be successfully login$/, ()=>{
  cy.url().should(`include`, `/home`);
});

Then(/^I should expect "([^"]*)" to be added in the immunisation grid$/, (vaccine:string)=>{
  cy.get(`#scr-pat-clinical-06-immunisations-grid tbody tr td`, {timeout: 10000}).should(`have.text`, vaccine);
});
