/// <reference types="cypress" />
import selectors from './properties/dom-elements';
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
	}
}

Cypress.Commands.add(`enterEmail`, (email:string) => {
	cy.get(selectors.email).type(email);
	cy.get(selectors.continueLoginBtn).click();
});

Cypress.Commands.add(`memberLogin`, (params) => {
	cy.visit(`https://uitest.test.medirecords.com/dev-07-12-2022/login.html#/login`);
	cy.fixture(`/properties/uitest-chrome.json`).then((testData)=>{
		const email:string = testData.airclaim[params.inputs.email];
		const username:string = testData.airclaim[params.inputs.username];
		const password:string = testData.airclaim[params.inputs.password];
		cy.enterEmail(email);
		cy.get(selectors.username).type(username);
		cy.get(selectors.password).type(password);
		cy.get(selectors.submitLoginBtn).click();
	});
});

export {};
