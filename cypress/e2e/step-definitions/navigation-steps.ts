/// <reference types="cypress" />
import { Given } from '@badeball/cypress-cucumber-preprocessor';

//Login to MRAPP
Given(/^I login to MRAPP using:$/, (testData:any)=>{
  cy.visit(`/dev-13-12-2022/login.html#/login`);
  // cy.visit(`/`);
  const data = testData.rowsHash();
  cy.memberLogin({inputs:data});
});

//Common steps for accessing MENU TABS
Given(/^I am ON "([^"]*)"$/,(page:string)=>{
  cy.fixture(`/element-pattern/${page.replace(/\s+/g, '')}.json`).as(`menuSelectors`);
});

Given(/^I am ON "([^"]*)" page$/, (page:string)=>{
  cy.menuNavigate(page);
});

Given(/^I am on "([^"]*)" page with "([^"]*)"$/, (page:string,patient:string)=>{
  cy.navPatientDetails(page, patient);
});

Given(/^I am on "([^"]*)" with "([^"]*)"$/, (tab:string,patient:string)=>{
  cy.navClinicalTab(tab, patient);
});

Given(/^I am on "([^"]*)" section of "([^"]*)"$/, (section:string,patient:string)=>{
  cy.navImmunisationSection(section, patient);
});





