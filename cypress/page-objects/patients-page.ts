export default class PatientsPage {

  searchPatient(patient:string, selector:string){
    cy.get(selector)
    .type(patient)
    .type('{enter}');

    cy.intercept(`POST`, `/rest/secured/api/patients/find`).as(`dataGrid`);
    cy.wait(`@dataGrid`, {timeout:40000}).its(`response.statusCode`).should(`eq`, 200);
    cy.wait(2000);
    return this;
  }

  clickButton(buttonText:string,selector:string){
    cy.contains(selector, buttonText).should(`exist`).click();
    return this;
  }

  checkPatients(patientGrid:string){
    cy.get(`[name='${patientGrid}']`).check({force:true});
    return this;
  }

  selectImmunisations(vaccine:string,vaccineList:string){
    cy.get(vaccineList).should(`exist`);
    cy.contains(`[data-field="vaccine"]`, vaccine, {timeout: 40000}).should(`exist`).click();
  };

  enterNumberSequence(sequenceNumber:number, selector:string){
    cy.get(selector).siblings(`input`).type(`${sequenceNumber}`);
  }
  enterBatchNumber(batch:string, batchInput:string){
    cy.get(batchInput).type(batch);
  }

  clickNewImmunisationBtn(button:string){
    cy.get(button,{timeout:40000}).click();
  }
}
  