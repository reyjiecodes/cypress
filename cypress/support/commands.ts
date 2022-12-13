/// <reference types="cypress" />
import commandSelectors from './command-dom-elements/command-selectors';
import PatientsPage from '../page-objects/patients-page';

const patientsPOM = new PatientsPage();
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare global {
	namespace Cypress {
		interface Chainable<Subject> {
			memberLogin(params : LoginInputs ): void;
		}

		interface Chainable<Subject> {
			enterEmail(email : string ): void;
		}

		interface LoginInputs{
			inputs:{
				email: string,
				username: string,
				password: string
			}
		}
		interface Chainable<Subject> {
			menuNavigate(menu:string): void;
		}
		interface Chainable<Subject> {
			tabNavigate(menu:string): void;
		}
		interface Chainable<Subject> {
			sectionNavigate(menu:string): void;
		}
    interface Chainable<Subject> {
			navPatientDetails( page:string, patient:string): void;
		}
    interface Chainable<Subject> {
			navClinicalTab(tab:string,patient:string): void;
		}
	interface Chainable<Subject> {
		navImmunisationSection(section:string, patient:string): void;
		}
	}
}

Cypress.Commands.add(`enterEmail`, (email:string) => {
	cy.get(commandSelectors.email).type(email);
	cy.get(commandSelectors.continueLoginBtn).click();
});

Cypress.Commands.add(`memberLogin`, (params) => {
	cy.fixture(`/properties/uitest-chrome.json`).then((testData)=>{
		const email:string = testData.airclaim[params.inputs.email];
		const username:string = testData.airclaim[params.inputs.username];
		const password:string = testData.airclaim[params.inputs.password];
		cy.enterEmail(email);
		cy.get(commandSelectors.username).type(username);
		cy.get(commandSelectors.password).type(password);
		cy.get(commandSelectors.submitLoginBtn).click();
	});
});

Cypress.Commands.add(`menuNavigate`,(menu:string)=>{
	if(menu === 'Patients'){
		cy.fixture(`/element-pattern/Patients.json`).as(`pageSelector`);
	}else if(menu === 'Home'){
		cy.fixture(`/element-pattern/Home.json`).as(`pageSelector`);
	}
	cy.get(commandSelectors[menu.toLowerCase()]).click();
});

Cypress.Commands.add(`tabNavigate`, (tab:string)=>{
	if(tab ==='Clinical'){
		cy.fixture(`/element-pattern/PatientsClinicalTab.json`).as(`tabSelector`);
	}
	cy.get(commandSelectors[`${tab.toLowerCase()}Tab`]).click();
});

Cypress.Commands.add(`sectionNavigate`, (section:string)=>{
	cy.intercept(`POST`, `schedules`).as(`clinicalSectionUIStatus`);
	cy.wait(`@clinicalSectionUIStatus`, {timeout:40000}).its(`response.statusCode`).should(`eq`, 200);
	if(section ==='Immunisations'){
		cy.fixture(`/element-pattern/PatientImmunisations.json`).as(`sectionSelector`);
	}
	cy.get(commandSelectors[section.toLowerCase()]).click();

});

Cypress.Commands.add(`navPatientDetails`, (page:string, patient:string)=>{
  const arr = page.split(' ');
  cy.menuNavigate(arr[0]);
  cy.intercept(`POST`, `/rest/secured/api/patients/find`).as(`dataGrid`);
	cy.wait(`@dataGrid`, {timeout:40000}).its(`response.statusCode`).should(`eq`, 200);
	cy.wait(2000);
	cy.get(`@pageSelector`).then((selector:any)=>{
    const searchSelector = selector.domElements.search.id;
    patientsPOM.searchPatient(patient,searchSelector);
  })
  //click patient from Patient grid
  cy.contains(patient).click();
  cy.url().should(`include`,`/patients/`);
});

Cypress.Commands.add(`navClinicalTab`, (tab:string, patient:string, )=>{
  const arr = tab.split(' ');
  cy.navPatientDetails(`Patients`,patient);
  cy.tabNavigate(arr[0]);
  cy.get(`@tabSelector`).then((selector:any)=>{
  cy.url().should(`include`, selector.urlExtension );
  });
});

Cypress.Commands.add(`navImmunisationSection`, (section: string, patient:string)=>{
  cy.navPatientDetails(`Patients`,patient);
  cy.tabNavigate(`Clinical`);
  cy.intercept(`POST`, `schedules`).as(`clinicalTab`);
	cy.wait(`@clinicalTab`, {timeout:40000}).its(`response.statusCode`).should(`eq`, 200);
	cy.wait(2000);
  cy.sectionNavigate(`Immunisations`);
});


export {};
