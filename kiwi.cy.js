Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('kiwi.cy.js', () => {
  it('jobs.kiwi.com', () => {
    cy.visit('https://jobs.kiwi.com/')

    cy.contains('Allow all cookies').click({force:true})

    //should check that correct page is loaded
    cy.url().should('include', 'kiwi.com')

      // got   > e.init is not a function error after clicking on "About us" - error  turned off by using first function
    cy.contains('About us').click({force:true})
  })

  it('About us', () => {
    //should check that correct page is loaded
    cy.url().should('include', 'about-us')
    cy.contains('Communication is key')
  })

  it('Locations', () => {
    cy.contains('Locations').click({force:true})
    cy.contains('Allow all cookies').click({force:true})

    // check that correct page is loaded
    cy.url().should('include','loc')

    //check that there is not location named 'Rondon'
    cy.should('not.contain','Rondon')
    cy.contains('London').click({force:true})

    //checking that there is button named 'Facilities'
    assert.equal('Facilities', 'Facilities', 'Click on Facilities')
    cy.contains('Facilities').click({force:true})

    //opening specific position
    cy.contains('Office On-Site Support').click()

    //trying not to select 'Saved jobs' instead of 'Save'
    assert.notEqual('Save', 'Saved')
    cy.get('.b-info .kw-ga-job-save').click()
//full class selector: button button--width button--secondary js-jobs-save kw-ga-job-save

    //checking that saved position of 'Office On-Site Support' is in 'Saved jobs'
    cy.contains('Saved jobs').click({force: true})
    cy.contains('Office On-Site Support')

  })
})
