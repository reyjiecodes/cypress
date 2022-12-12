/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';


Then(/^I should be ON "([^"]*)"$/, (page:string)=>{
    cy.fixture(`/element-pattern/${page.replace(/\s+/g, '')}.json`).then((selector)=>{
      const extension:string = selector.urlExtension;
      cy.url().should(`include`, extension );
    });
});

