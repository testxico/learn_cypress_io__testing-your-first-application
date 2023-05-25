describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Test title matches expected content', () => {
    const expectedTitle = "Testing Next.js Applications with Cypress"
      cy.getByData('hero-heading').should('exist').contains(expectedTitle)
  })

  it('Test list elements match expected text content', () => {
    const expectedListContents = [
      "4 Courses",
      "25+ Lessons",
      "Free and Open Source"
    ]
    expectedListContents.forEach( (expectedText, index) => {
      cy.get('dt').eq(index).contains(expectedText)
    });  
  })

  it('Test subscribe form displays success message appear for valid email', () => {
    const emailAddress = "username@testdomain.com";
    const expectedSuccessMessage = `Success: ${emailAddress} has been successfully subscribed`;
    cy.getByData('email-input').type(emailAddress)
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('exist').contains(expectedSuccessMessage);
  })

  it('Test subscribe form  does not display success message for already subscribed user', () => {
    const emailAddress = "john@example.com";
    const expectedErrorMessage = `Error: ${emailAddress} already exists. Please use a different email address.`
    cy.getByData('email-input').type(emailAddress)
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('not.exist');
    cy.getByData('server-error-message').should('exist').contains(expectedErrorMessage);
  })

  it('Test subscribe form  displays error message when submitting an empty form', () => {
    const expectedErrorMessage = 'Email is required';
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('not.exist');
    cy.getByData('error-message').should('exist').contains(expectedErrorMessage);
  })

})