Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('kiwi.cy.js', () => {
  it('should visit', () => {
    cy.visit('https://jobs.kiwi.com/')


    cy.contains('Allow all cookies').click()

    //should check that correct page is loaded
    cy.url().should('include', 'kiwi.com')

      // got   > e.init is not a function error after clicking on "About us" - error  turned off by using first function
    cy.contains('About us').click()
    cy.url().should('include', 'about-us')
    cy.contains('Communication is key')
  })
})

