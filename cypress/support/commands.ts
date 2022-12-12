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
			searchPatient(patient:string): void;
		}
    interface Chainable<Subject> {
			navPatientDetails( patient:string): void;
		}
    interface Chainable<Subject> {
			navPatientTabs(tab:string,patient:string): void;
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
	cy.get(commandSelectors[menu]).click();
});

Cypress.Commands.add(`navPatientDetails`, (patient:string)=>{
  cy.fixture(`/element-pattern/PatientDetails.json`).as(`selector`);
  cy.get(`@selector`).then((selector:any)=>{
    cy.menuNavigate(`patients`);
    patientsPOM.searchPatient(patient,commandSelectors.patientSearchID);
    cy.contains(`patient`).click();
    cy.url().should(`include`,`/patients/`);
    cy.contains(selector.domElements.patientStatus.id).should(`exist`);
  });

});

Cypress.Commands.add(`navPatientTabs`, (tab:string, patient:string, )=>{
  cy.navPatientDetails(patient);
  cy.fixture(`/element-pattern/${tab.replace(/\s+/g, '')}.json`).as(`selector`);
  cy.get(`@selector`).then((selector:any)=>{
    cy.get(selector.domElements[tab].id).should(`exist`).click();
  });
});



export {};
