describe('kiwi.cy.js', () => {
  it('should visit', () => {
    cy.visit('https://jobs.kiwi.com/')
    cy.contains('Allow all cookies').click()

      // got   > e.init is not a function error after clicking on "About us"
    cy.contains('About us').click()
  })
})
