export default class PatientsPage {

  searchPatient(patient:string, selector?:string){
    cy.get(selector)
    .type(patient)
    .type('{enter}');
    return this;
  }

  clickButton(buttonText:string,selector:string){
    cy.contains(selector, buttonText).should(`exist`).click();
  }

  checkPatients(patientGrid:string){
    cy.intercept(`POST`, `https://api-mrapp-uitest.test.medirecords.com/rest/secured/api/patients/find`).as(`dataGrid`);
    cy.wait(`@dataGrid`, {timeout:40000}).its(`response.statusCode`).should(`eq`, 200);
    cy.wait(2000);
    cy.get(`[name='${patientGrid}']`).check({force:true});
  }
}
  