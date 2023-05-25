describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Test title matches expected content', () => {
    const expectedTitle = "Testing Next.js Applications with Cypress"
      cy.get('[data-test="hero-heading"]').should('exist').contains(expectedTitle)
  })

  it('Test title matches expected content', () => {
    const expectedListContents = [
      "4 Courses",
      "25+ Lessons",
      "Free and Open Source"
    ]
    expectedListContents.forEach( (expectedText, index) => {
      cy.get('dt').eq(index).contains(expectedText)
    });  
  })

})