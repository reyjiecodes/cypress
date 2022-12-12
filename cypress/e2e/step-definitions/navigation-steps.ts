/// <reference types="cypress" />
import { Given } from '@badeball/cypress-cucumber-preprocessor';

//Login to MRAPP
Given(/^I login to MRAPP using:$/, (testData:any)=>{
  // cy.visit(`/dev-12-12-2022/login.html#/login`);
  cy.visit(`/`);
  const data = testData.rowsHash();
  cy.memberLogin({inputs:data});
});

//Common steps for accessing MENU TABS
Given(/^I am ON "([^"]*)"$/,(page:string)=>{
  cy.fixture(`/element-pattern/${page.toLowerCase()}.json`).as(`selector`);
});

Given(/^I am ON "([^"]*)" page$/, (page:string)=>{
  page = page.toLowerCase();
  cy.fixture(`/element-pattern/${page}.json`).as(`selector`);
  const arr = page.split('-');
  cy.menuNavigate(arr[0]);
});

Given(/^I am on Patients details page with "([^"]*)"$/, (patient:string)=>{
  cy.navPatientDetails(patient);
});

Given(/^I am on Patients "([^"]*)" with "([^"]*)"$/, (tab:string,patient:string)=>{
  cy.navPatientTabs(tab, patient);
});




