/// <reference types="cypress" />
import { When } from '@badeball/cypress-cucumber-preprocessor';
import PatientsPage from '../../../page-objects/patients-page';

const patientsPOM = new PatientsPage() ;

When(/^I search "([^"]*)" patients name$/, (patient:string)=>{
  cy.intercept(`POST`, `/rest/secured/api/patients/find`).as(`dataGrid`);
	cy.wait(`@dataGrid`, {timeout:40000}).its(`response.statusCode`).should(`eq`, 200);
	cy.wait(2000);
	cy.get(`@pageSelector`).then((selector:any)=>{
		patientsPOM.searchPatient( patient, selector.domElements.search.id);
	});
});

When(/^I check "([^"]*)" at patients grid$/, (patient:string)=>{
	cy.contains(patient).should(`exist`);
	cy.get(`@pageSelector`).then((selector:any)=>{
		const patientGrid = selector.domElements.patientGrid.name;
		patientsPOM.checkPatients(patientGrid);
	});
});

When(/^I click "([^"]*)" patients button$/, (button:string)=>{
	cy.get(`@pageSelector`).then((selector:any)=>{
		const selectorID = selector.domElements.editPatientButton.id;
		patientsPOM.clickButton(button,selectorID);
	});
});

When(/^I click "([^"]*)" menu$/, (tabs:string)=>{
  cy.get(`@menuSelectors`).then((selector:any)=>{
    cy.get(selector.domElements[`${tabs.toLowerCase()} menu`].id).click();
  });
});

When(/^I click "([^"]*)" tab$/, (tab:string)=>{
	cy.tabNavigate(tab);
});

When(/^I click "([^"]*)" section$/, (section:string)=>{
	cy.sectionNavigate(section);
});

When(/^I select "([^"]*)" in "([^"]*)" from New Immunization popup$/, (vaccine:string, vaccineList:string,)=>{
	cy.get(`@sectionSelector`).then((selector:any)=>{
		const vaccineListElem = selector.domElements[vaccineList].id;
		patientsPOM.selectImmunisations(vaccine,vaccineListElem);
	});
});

When(/^I enter 1 in "([^"]*)"$/, ( sequenceInput:string)=>{
	cy.get(`@sectionSelector`).then((selector:any)=>{
		sequenceInput = selector.domElements[sequenceInput].id;
		patientsPOM.enterNumberSequence(1,sequenceInput);
	});
});

When(/^I enter "([^"]*)" in "([^"]*)"$/, (batch:string, batchInput:string)=>{
	cy.get(`@sectionSelector`).then((selector:any)=>{
		batchInput = selector.domElements[batchInput].id;
		patientsPOM.enterBatchNumber(batch,batchInput);
	});
});

When(/^I click "([^"]*)" button$/, (button:string)=>{
	cy.get(`@sectionSelector`).then((selector:any)=>{
		const newImmunisationBtn = selector.domElements[button].id;
		patientsPOM.clickNewImmunisationBtn(newImmunisationBtn);
	});
	
});