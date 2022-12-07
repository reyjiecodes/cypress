import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given(`I am login to MRAPP using`, (testData:any)=>{
  const data = testData.rowsHash();
  cy.memberLogin({inputs:data});
});





