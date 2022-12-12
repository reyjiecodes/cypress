/// <reference types="cypress" />
import { When } from '@badeball/cypress-cucumber-preprocessor';
import PatientsPage from '../../../page-objects/patients-page';

const patientsPOM = new PatientsPage();

When(/^I search "([^"]*)" patients name$/, (patient:string)=>{
  cy.intercept(`POST`, `/rest/secured/api/patients/find`).as(`dataGrid`);
	cy.wait(`@dataGrid`, {timeout:40000}).its(`response.statusCode`).should(`eq`, 200);
	cy.wait(2000);
	cy.get(`@selector`).then((selector:any)=>{
		patientsPOM.searchPatient( patient, selector.domElements.search.id);
	});
});

When(/^I check "([^"]*)" at patients grid$/, (patient:string)=>{
	cy.contains(patient).should(`exist`);
	cy.get(`@selector`).then((selector:any)=>{
		const patientGrid = selector.domElements.patientGrid.name;
		patientsPOM.checkPatients(patientGrid);
	});
});

When(/^I click "([^"]*)" patients button$/, (button:string)=>{
	cy.get(`@selector`).then((selector:any)=>{
		const selectorID = selector.domElements.editPatientButton.id;
		patientsPOM.clickButton(button,selectorID);
	});
});

When(/^I click "([^"]*)"$/, (tabs:string)=>{
  cy.get(`@selector`).then((selector:any)=>{
    cy.get(selector.domElements[tabs].id).click();
  });
});

When(/^I select "([^"]*)" in "([^"]*)" from the popup$/, (vacine:string, vacineList:string, testData:any)=>{
	testData = testData.rowsHash();

});

When(/^I enter 1 in "([^"]*)"$/, ()=>{

});

When(/^I enter "([^"]*)" in "([^"]*)"$/, ()=>{

});

When(/^I click "([^"]*)" at "([^"]*)"$/, ()=>{

});

When(/^I enter$/, ()=>{

});

